import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: FC = () => {
  return (
    <div className='relative'>
      <div className='reltaive w-full h-[75vh]'>
        <Image src='/images/collegeWalk.png' sizes='100vw' fill style={{ objectFit: 'cover'}} alt='college walk'/>
      </div>
      <div className='absolute flex flex-col'>
        <h1>Take the next step towards higher education</h1>
        <p>Free admissions educational resources are available to service members through our online platform.</p>
        <Link href='/'>Learn More</Link>
      </div>
    </div>
  );
};

export default Hero;
