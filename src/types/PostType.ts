interface PostType {
  id: string;
  title: string;
  brief: string;
  slug: string;
  coverImage?: { url: string } | null;
}

export type { PostType };
