import React from 'react';
import Heading from '../../elements/Heading/Heading';
import Button from '../../elements/Button/Button';
import classes from './CTA.module.css';


const CTA = (props) => {
  return (
    <section className={classes.CTA}>
      <Heading content={'Get Started'}/>
      <p>make the time to make change happen. Wake up, water your plants and feed your soul.</p>
      <Button content={'Get Growing'}/>
    </section>
  )
}

export default CTA;