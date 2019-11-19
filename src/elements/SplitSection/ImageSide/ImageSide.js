import React from 'react';
import classes from './ImageSide.module.css';

const imageSide = (props) => {
  return (
    <div className={classes.ImageSide}>
      <div className={classes[`Image-${props.section}`]}>
        <img 
          className={props.extraClass}
          src={props.image} 
          alt={props.imageAlt}/>
      </div>
      {props.children}
    </div>
  )
}

export default imageSide;