import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: FC = () => {
  return (
    <div className="relative">
      <div className="reltaive h-[75vh] w-full">
        <Image
          src="/images/collegeWalk.png"
          sizes="100vw"
          fill
          style={{ objectFit: 'cover' }}
          alt="college walk"
        />
      </div>
      <div className="absolute top-0 z-10 flex h-[75vh] w-full flex-col justify-center px-[6.6vw] text-white md:max-w-[50vw]">
        <h1 className="text-4xl md:text-6xl">
          Take the next step towards higher education
        </h1>
        <p className="my-4">
          Free admissions educational resources are available to service members
          through our online platform.
        </p>
        <Link
          href="/"
          className="w-40 rounded border border-transparent bg-red-500 py-2 px-8 text-white hover:border-red-500 hover:bg-white hover:text-red-700"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Hero;
