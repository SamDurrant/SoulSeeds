import React from 'react';
import classes from './HowItWorks.module.css';
import SplitSection from '../../elements/SplitSection/SplitSection';
import TextSide from '../../elements/SplitSection/TextSide/TextSide';
import ImageSide from '../../elements/SplitSection/ImageSide/ImageSide';
import Blob from '../../elements/Blob/Blob';
import Heading from '../../elements/Heading/Heading';
import image from '../../assets/images/essentialism-book.jpg';

const howItWorks = (props) => {
  return (
    <SplitSection>
      <ImageSide
        section={'works'}
        image={image}
        imageAlt={'book that states, "play doesn\'t just help us to explore what is essential. It is essential in and of itself.'}>
        <Blob blobSource={'Three'} section={'works'}/>
      </ImageSide>
      <TextSide>
        <Heading content={'How It Works'}/>
        <ol className={classes.List}>
          <li>We pair plants and books that we believe will have an impact. Each seedling comes with care instructions.</li>
          <li>You provide us one word to describe the desired direction of your growth and choose the frequency.</li>
          <li>We deliver a box of Soul Seeds straight to your door.</li>
          <li>You begin your growth spurt.</li>
        </ol>
      </TextSide>
    </SplitSection>
  )
}

export default howItWorks;