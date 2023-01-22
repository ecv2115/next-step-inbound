import React, { FC } from 'react';
import Link from 'next/link';
import DropDown from './DropDown';

const EducationDropDown: FC = () => {
  return (
    <DropDown title="Education">
      <div className="flex justify-center gap-10 py-10 px-4">
        <div className="flex flex-col gap-6">
          <h5 className="uppercase text-navy-medium">Video Series</h5>
          <div className="flex flex-col gap-4 text-lg">
            <Link href="/">Personal Statement Workshop</Link>
            <Link href="/">Letters of Recommendation</Link>
            <Link href="/">SAT & ACT: Insight & Prep</Link>
            <Link href="/">Extracurricular Activities</Link>
            <Link href="/">The Importance of your GPA</Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h5 className="uppercase text-navy-medium">Articles</h5>
          <div className="flex flex-col gap-4 text-lg">
            <Link href="/">Selecting Classes & Professors</Link>
            <Link href="/">Reasons to Ecel in the Military</Link>
            <Link href="/">SAT & ACT: Insigh & Prep</Link>
            <Link href="/">Demilitarize Yourself (to an extent)</Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h5 className="uppercase text-navy-medium">Campus Tours</h5>
          <div className="flex flex-col gap-4 text-lg">
            <Link href="/">Columbia University</Link>
            <Link href="/">Princeton University</Link>
            <Link href="/">Other University</Link>
          </div>
        </div>
      </div>
    </DropDown>
  );
};

export default EducationDropDown;
