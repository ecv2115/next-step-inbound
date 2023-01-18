import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header>
      <div className='px-[6.6vw] py-7 w-full bg-white h-38 flex flex-row justify-center items-center text-navy'>
        <div className='w-full flex gap-x-[88px]'>
          <h5>Education</h5>
          <h5>Resources</h5>
          <Link href='/'>Discord</Link>
        </div>
        <div className='mx-10 flex relative h-[72px] w-full max-w-[366px]'>
          <Image src='/ntiLogo.png' fill style={{ objectFit: 'contain' }} alt='logo image'/>
        </div>
        <div className='w-full justify-end flex gap-x-[88px]'>
          <h5>Team</h5>
          <h5>Blog</h5>
          <h5>Donate</h5>
        </div>
      </div>
    </header>
  );
};

export default Header;