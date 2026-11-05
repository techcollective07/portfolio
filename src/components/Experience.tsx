import { Title } from './Common/Title';
import data from '@/data';
import { ExperienceType } from '@/types';
import React from 'react';

const experience: ExperienceType[] = data.experience;

export const Experience = () => {
  return (
    <div className="max-w-7xl w-full mx-auto p-5 md:p-0" id="experience">
      <Title num={2} title="Experience" />

      <ol className="relative mt-10 border-l-2 border-neon/30 md:w-3/4">
        {experience.map(job => (
          <li
            className="mb-12 ml-6 last:mb-0 z-10"
            data-aos="fade-up"
            data-aos-duration="800"
            key={`${job.company}-${job.period}`}
          >
            <span className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full border-2 border-neon bg-bgblue" />

            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-semibold text-neon">{job.title}</h3>
              {job.current && (
                <span className="rounded-full bg-neon/10 border border-neon px-3 py-0.5 text-xs text-neon font-fira">
                  Present
                </span>
              )}
            </div>

            <p className="mt-1 text-lg text-text">
              {job.company}
              <span className="text-textDark"> · {job.type}</span>
            </p>

            <p className="mt-1 text-sm text-textDark font-fira">
              {job.period} <span className="mx-1">|</span> {job.location}
            </p>

            <ul className="mt-4 space-y-2">
              {job.highlights.map(point => (
                <li className="flex text-textDark" key={point}>
                  <span className="mr-3 mt-[2px] text-neon">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};
