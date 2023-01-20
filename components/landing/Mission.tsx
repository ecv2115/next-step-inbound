import React, { FC } from 'react';

const Mission: FC = () => {
  return (
    <div className="flex h-[25vh] flex-col items-center justify-center bg-[#FAFAFA] px-[6.6vw] text-center">
      <h3 className="text-sm md:text-base text-navy-medium">OUR MISSION</h3>
      <p className="text-xl md:text-3xl">
        We are a team of student veterans, dedicated to helping service members
        transition from the enlisted ranks, into our nations top colleges.
      </p>
    </div>
  );
};

export default Mission;
