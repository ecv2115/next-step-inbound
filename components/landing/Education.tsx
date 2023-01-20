import React, { FC } from 'react';
import DescriptLink from './DescriptLink';

const Education: FC = () => {
  const desc =  {
    title: 'Our reps have ';
    description: string;
    buttonText: string;
    buttonHref: string;
    image: StaticImageData;
    imageLocation: 'left' | 'right';
  }

  return (
    <>
      <DescriptLink title={desc.title} descript={desc.descript} buttonText={desc.buttonText}/>
    </>
  );
};

export default Education; 