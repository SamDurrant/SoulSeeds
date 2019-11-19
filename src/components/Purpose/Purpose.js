import React from 'react';
import SplitSection from '../../elements/SplitSection/SplitSection';
import TextSide from '../../elements/SplitSection/TextSide/TextSide';
import ImageSide from '../../elements/SplitSection/ImageSide/ImageSide';
import Heading from '../../elements/Heading/Heading';
import image from '../../assets/images/plant-in-pot.jpg';

const purpose = (props) => {
  return (
    <SplitSection>
      <TextSide section={'purpose'}>
        <Heading content={'Our Purpose'} />
        <p>We want everyone to be their best self. Change happens incrementally over time, often growing from a small and unassuming seed. Our goal is to be that seed and ignite a waking within each and every one of you.</p>
      </TextSide>
      <ImageSide 
        section={'purpose'}
        image={image} 
        imageAlt={'wide-leafed plant in pot.'}/>
    </SplitSection>
  )
}

export default purpose;