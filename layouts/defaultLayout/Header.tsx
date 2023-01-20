import React, { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <div className='px-[6.6vw] py-7 w-full bg-white h-38 flex flex-row justify-between md:justify-center items-center text-navy'>
        <div className='hidden text-sm md:flex w-full justify-between items-center'>
          <h5>Education</h5>
          <h5>Resources</h5>
          <Link href='/'>Discord</Link>
        </div>
        <div className='flex relative h-[36px] max-w-[183px] w-full md:mx-[5vw] md:h-[72px] md:max-w-[366px]'>
          <Image src='/images/ntiLogo.png' fill style={{ objectFit: 'contain' }} alt='logo image'/>
        </div>
        <div className='hidden text-sm md:flex w-full justify-between items-center'>
          <h5>Team</h5>
          <h5>Blog</h5>
          <Link href='/' className='bg-transparent hover:bg-red-500 text-red-700 hover:text-white py-2 px-8 border border-red-500 hover:border-transparent rounded'>Donate</Link>
        </div>
        <div className='relative md:hidden' onClick={toggleMenu}>
          <Image src='/icons/hamburger.svg' height={20} width={20} alt='hamburger icon'/>
        </div>
      </div>
    </header>
  );
};

export default Header;