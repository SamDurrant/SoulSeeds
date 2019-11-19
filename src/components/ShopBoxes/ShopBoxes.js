import React from 'react';
import classes from './ShopBoxes.module.css';
import SplitSection from '../../elements/SplitSection/SplitSection';
import Heading from '../../elements/Heading/Heading';
import BoxCard from '../BoxCard/BoxCard';
import plantWithSign from '../../assets/images/seed-with-sign.jpg';

const shopBoxes = (props) => {
  const boxes = [
    {
      title: 'The Sapling',
      subtitle: 'A single box to kickstart growth',
      image: plantWithSign,
      imageAlt: 'Small plant in a pot next to a sign that says difficult roads lead to beautiful destinations',
      price: '$30',
      description: 'Includes one seed starter complete with care instructions and one soul starter in the form of a book.'
    },
    {
      title: 'The Forest',
      subtitle: 'A monthly box for continued growth',
      image: plantWithSign,
      imageAlt: 'Small plant in a pot next to a sign that says difficult roads lead to beautiful destinations',
      price: '$22',
      description: 'Includes one seed starter complete with care instructions, a ceramic pot for planting and one soul starter in the form of a book.'
    }
  ]

  const sapling = <BoxCard info={boxes[0]}/>
  const forest = <BoxCard info={boxes[1]}/>

  return (
    <React.Fragment>
      <Heading content={'Our Boxes'} />
      <SplitSection className={classes.shopBoxes}>
      { sapling }
      { forest }
      </SplitSection>
    </React.Fragment>
  )
}

export default shopBoxes;