import React, { FC, ReactNode, useState } from 'react';
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';
import useAccordion from '@hooks/useAccordion';

interface DropDownProps {
  title: string;
  children: ReactNode;
}

const DropDown: FC<DropDownProps> = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleDropDown = () => setIsVisible(!isVisible);

  const { rotate } = useSpring({
    config: { mass: 10, tension: 1500, friction: 160 },
    from: { rotate: 0 },
    to: { rotate: isVisible ? 180 : 0 },
  });

  const { height, opacity, accordionRef, isAuto } = useAccordion(isVisible);

  return (
    <div className="z-1000 overflow-visible">
      <div className="flex gap-1">
        <h5 onClick={toggleDropDown} className="cursor-pointer">
          {title}
        </h5>
        <animated.div style={{ rotate }} className="relative">
          <Image
            src="/icons/down-carrot.svg"
            height={20}
            width={20}
            alt="down carrot"
          />
        </animated.div>
      </div>
      <div className="h-fit">
        <animated.div
          ref={accordionRef}
          className="absolute left-0 top-32 z-10 h-fit w-full overflow-hidden bg-grayscale-bg"
          style={isAuto ? { height: 'auto' } : { height, opacity }}
        >
          {children}
        </animated.div>
      </div>
    </div>
  );
};

export default DropDown;
