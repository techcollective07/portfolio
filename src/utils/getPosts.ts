import { PostType } from '@/types';

const HASHNODE_API = 'https://gql.hashnode.com/';

const query = async (body: string) => {
  const res = await fetch(HASHNODE_API, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ query: body }),
  });
  if (!res.ok) throw new Error(`Hashnode responded with ${res.status}`);
  return res.json();
};

/**
 * Fetches the latest blog posts from Hashnode.
 * Never throws: on any failure it returns an empty list so the build still succeeds
 * and the Blog section is simply hidden.
 */
const getPosts = async (username: string): Promise<PostType[]> => {
  try {
    const userData = await query(`
      {
        user(username: "${username}") {
          posts(pageSize: 3, page: 1, filter: { publications: ["60d17a93a6a3a25dadf6268d"] }) {
            edges { node { id } }
          }
        }
      }
    `);

    const edges: { node: { id: string } }[] =
      userData?.data?.user?.posts?.edges ?? [];

    const posts = await Promise.all(
      edges.map(async ({ node }) => {
        const postData = await query(`
          {
            post(id: "${node.id}") {
              id
              title
              brief
              slug
              coverImage { url }
            }
          }
        `);
        return postData?.data?.post as PostType | undefined;
      }),
    );

    return posts.filter((p): p is PostType => Boolean(p));
  } catch (error) {
    console.warn('Could not fetch blog posts:', (error as Error).message);
    return [];
  }
};

export default getPosts;
