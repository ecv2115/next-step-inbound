import React, { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EducationDropDown from './EducationDropDown';

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <div className="h-38 flex w-full flex-row items-center justify-between overflow-visible bg-white px-[6.6vw] py-7 text-navy-deep md:justify-center">
        <div className="hidden w-full items-center justify-between text-sm md:flex">
          <EducationDropDown />
          <h5>Resources</h5>
          <Link href="/">Discord</Link>
        </div>
        <div className="relative flex h-[36px] w-full max-w-[183px] md:mx-[2vw] md:h-[72px] md:max-w-[366px] lg:mx-[7vw]">
          <Image
            src="/images/ntiLogo.png"
            fill
            style={{ objectFit: 'contain' }}
            alt="logo image"
          />
        </div>
        <div className="hidden w-full items-center justify-between text-sm md:flex">
          <h5>Team</h5>
          <h5>Blog</h5>
          <Link
            href="/"
            className="w-fit rounded border border-red-500 bg-transparent py-2 px-8 text-red-700 hover:border-transparent hover:bg-red-500 hover:text-white"
          >
            Donate
          </Link>
        </div>
        <div className="relative md:hidden" onClick={toggleMenu}>
          <Image
            src="/icons/hamburger.svg"
            height={24}
            width={24}
            alt="hamburger icon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
