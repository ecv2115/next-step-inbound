import React, { FC } from 'react';
import Image from 'next/image';

const DonorsAndPartners: FC = () => {
  return (
    <div className="h-[50vh] w-full bg-[#FAFAFA] py-20 px-[6.6vw] text-center">
      <h2 className="pb-2 text-center text-sm text-navy-medium md:text-base">
        DONORS &amp; PARTNERS
      </h2>
      <h3 className="text-center text-3xl font-bold text-grayscale-black md:text-5xl">
        Our supporters who
        <br />
        empower change
      </h3>
      <div className="mt-20 flex w-full flex-col justify-center gap-8 md:flex-row md:gap-[20vw]">
        <div className="relative h-[65px] w-full md:w-[50vw]">
          <Image
            src="/images/ColumbiaLogo.png"
            fill
            style={{ objectFit: 'contain' }}
            alt="columbia logo"
          />
        </div>
        <div className="relative h-[50px] w-full md:w-[50vw]">
          <Image
            src="/images/GibsonDunnLogo.png"
            fill
            style={{ objectFit: 'contain' }}
            alt="gibson dunn logo"
          />
        </div>
      </div>
    </div>
  );
};

export default DonorsAndPartners;
