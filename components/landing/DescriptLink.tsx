import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface DescriptLinkProps {
  heading: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageLocation: 'left' | 'right';
  backgroundColor: string;
}

const DescriptLink: FC<DescriptLinkProps> = ({ heading, title, description, buttonText, buttonHref, imageSrc, imageLocation, backgroundColor }) => {
  const flexOrdering = (imageLocation: string) => imageLocation === 'left' ? 'md:flex-row' : 'md:flex-row-reverse';

  return (
    <div className={`flex flex-col ${flexOrdering(imageLocation)} md:gap-20 w-full px-[6.6vw] py-[6vw] md:py-0 h-[75vh] bg-[${backgroundColor}]`}>
      <div className="relative w-full flex-[3_3_0%]">
        <Image src={imageSrc} fill style={{ objectFit: 'contain' }} alt="" />
      </div>
      <div className="flex flex-[2_2_0%] h-[75vh] flex-col justify-center md:max-w-[50vw]">
        <h3 className="text-navy-medium text-left py-2">
          {heading}
        </h3>
        <h1 className="text-3xl text-grayscale-black md:text-5xl">
          {title}
        </h1>
        <p className="my-4 text-grayscale-charcoal">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="w-fit rounded border border-transparent bg-red-500 py-2 px-8 text-white hover:border-red-500 hover:bg-white hover:text-red-700"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default DescriptLink;