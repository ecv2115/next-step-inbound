import React, { FC } from 'react';
import Image from 'next/image';

const DonorsAndPartners: FC = () => {
  return (
    <div className="bg-[#FAFAFA] px-[6.6vw] py-[6vw] text-center w-full">
      <h2 className="text-center text-sm md:text-base text-navy-medium">
        DONORS &amp; PARTNERS
      </h2>
      <h3 className="py-6 text-3xl md:text-5xl text-center">
        Our supporters who
        <br/>
        empower change
      </h3>
      <div className="flex flex-col justify-center items-center md:flex-row w-full md:gap-20">
        <div className="relative h-[150px] w-[75vw] md:w-[50vw]">
          <Image
            src="/images/ColumbiaLogo.png"
            fill
            style={{ objectFit: 'contain'}}
            alt="columbia logo"
          />
        </div>
        <div className="relative h-[150px] w-[75vw] md:w-[50vw]">
          <Image
            src="/images/GibsonDunnLogo.png"
            fill
            style={{ objectFit: 'contain'}}
            alt="gibson dunn logo"
          />
        </div>
      </div>
    </div>
  );
};

export default DonorsAndPartners;