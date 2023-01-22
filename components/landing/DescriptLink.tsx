import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Trail from '@components/common/Trail';
import { animated, useInView } from 'react-spring';

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
  const [ref, springs] = useInView(
    () => ({
      config: { mass: 10, tension: 2000, friction: 500 },
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    }),
    {
      once: true,
      rootMargin: '-50% 0%',
    }
  );

  const flexOrdering = (imageLocation: string): string =>
    imageLocation === 'left' ? 'md:flex-row' : 'md:flex-row-reverse';

  return (
    <div
      className={`flex flex-col ${flexOrdering(
        imageLocation
      )} h-[85vh] w-full gap-8 px-[6.6vw] py-20 md:h-[75vh] md:gap-20 md:py-0 bg-[${backgroundColor}]`}
    >
      <animated.div
        ref={ref}
        style={springs}
        className="relative w-full flex-[3_3_0%]"
      >
        <Image src={imageSrc} fill style={{ objectFit: 'contain' }} alt="" />
      </animated.div>
      <Trail className="flex h-[75vh] flex-[2_2_0%] flex-col justify-center gap-4 md:max-w-[50vw]">
        <h3 className="text-left text-navy-medium">{heading}</h3>
        <h2 className="text-3xl font-bold text-grayscale-black md:text-5xl">
          {title}
        </h2>
        <p className="text-grayscale-charcoal">{description}</p>
        <Link
          href={buttonHref}
          className="inline-block w-fit rounded border border-transparent bg-red-500 py-2 px-8 text-white hover:border-red-500 hover:bg-white hover:text-red-700"
        >
          {buttonText}
        </Link>
      </Trail>
    </div>
  );
};

export default DescriptLink;
