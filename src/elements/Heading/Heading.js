import React from 'react';
import classes from './Heading.module.css';

const heading = (props) => {
  return (
    <div>
      <h2 className={classes.Heading}>{props.content}</h2>
      <div className={classes.SmallBorder}></div>
    </div>
  )
}

export default heading;