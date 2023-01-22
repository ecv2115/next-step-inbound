import { useState, useRef, useEffect } from 'react';
import { useSpring } from 'react-spring';

const useAccordion = (isOpen: boolean) => {
  const [maxHeight, setMaxHeight] = useState(0);
  const accordionRef: any = useRef<HTMLDivElement>(null);

  const [isAuto, setIsAuto] = useState(false);

  const { height, opacity } = useSpring({
    config: { mass: 5, tension: 2000, friction: 200 },
    from: { height: 0, opacity: 0 },
    to: { height: isOpen ? maxHeight : 0, opacity: isOpen ? 1 : 0 },
    onStart: () => {
      setIsAuto(false);
    },
    onRest: (result) => {
      if (result.value.height > 0) {
        setIsAuto(true);
      }
    },
  });

  useEffect(() => {
    setMaxHeight(accordionRef.current.scrollHeight);
  });

  return { height, opacity, isAuto, accordionRef };
};

export default useAccordion;