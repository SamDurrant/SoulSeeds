import React from 'react';
import SplitSection from '../../elements/SplitSection/SplitSection';
import TextSide from '../../elements/SplitSection/TextSide/TextSide';
import ImageSide from '../../elements/SplitSection/ImageSide/ImageSide';
import Heading from '../../elements/Heading/Heading';
import Blob from '../../elements/Blob/Blob';
import image from '../../assets/images/plant-in-light.jpg';

const info = (props) => {
  return (
    <SplitSection>
      <TextSide section={'info'}>
        <Heading content={'Experience Growth'} />
        <p>We believe that growth comes from making a small change and nurturing that into something strong and beautiful. We’re here to help that happen.</p>
        <Blob blobSource={'One'} section={'info'}/>
      </TextSide>
      <ImageSide 
        section={'info'}
        image={image} 
        imageAlt={'plant in pot with sunlight.'}/>
    </SplitSection>
  )
}

export default info;