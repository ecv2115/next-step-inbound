import React, { FC } from 'react';

const Mission: FC = () => {
  return (
    <div className="flex h-[50vh] flex-col items-center justify-center gap-4 bg-[#FAFAFA] py-20 px-[6.6vw] text-center">
      <h3 className="text-sm text-navy-medium md:text-base">OUR MISSION</h3>
      <p className="text-xl text-grayscale-black md:text-3xl">
        We are a team of student veterans, dedicated to helping service members
        transition from the enlisted ranks, into our nations top colleges.
      </p>
    </div>
  );
};

export default Mission;
