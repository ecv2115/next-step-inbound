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

const DescriptLink: FC<DescriptLinkProps> = ({
  heading,
  title,
  description,
  buttonText,
  buttonHref,
  imageSrc,
  imageLocation,
  backgroundColor,
}) => {
  const flexOrdering = (imageLocation: string) =>
    imageLocation === 'left' ? 'md:flex-row' : 'md:flex-row-reverse';

  return (
    <div
      className={`flex flex-col ${flexOrdering(
        imageLocation
      )} h-[75vh] w-full px-[6.6vw] py-28 md:gap-20 md:py-0 bg-[${backgroundColor}]`}
    >
      <div className="relative w-full flex-[3_3_0%]">
        <Image src={imageSrc} fill style={{ objectFit: 'contain' }} alt="" />
      </div>
      <div className="flex h-[75vh] flex-[2_2_0%] flex-col justify-center gap-4 md:max-w-[50vw]">
        <h3 className="text-left text-navy-medium">{heading}</h3>
        <h1 className="text-3xl text-grayscale-black md:text-5xl">{title}</h1>
        <p className="text-grayscale-charcoal">{description}</p>
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
