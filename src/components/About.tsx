import { Title } from './Common/Title';
import data from '@/data';
import React from 'react';

export const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center max-w-7xl w-full mx-auto p-5 md:p-0"
      id="about"
    >
      <Title num={1} title="About me" />

      <div className="flex flex-col w-full md:justify-start md:items-start">
        <p className="mt-10 text-xl text-textDark md:w-3/4 z-10">
          {data.about}
        </p>
      </div>
    </div>
  );
};
