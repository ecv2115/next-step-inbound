import React, { FC, Children, ReactNode } from 'react';
import { useTrail, animated, useInView } from 'react-spring';

interface TrailProps {
  children: ReactNode;
  className?: string;
}

const Trail: FC<TrailProps> = ({ children, className }) => {
  const items = Children.toArray(children);
  const [ref, inView] = useInView({ once: true, rootMargin: '-50% 0%' });
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    from: { opacity: 0, y: 20 },
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 20,
  });

  return (
    <div ref={ref} className={className}>
      {trail.map(({ opacity, y }, index) => (
        <animated.div key={index} style={{ opacity, y }}>
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default Trail;
