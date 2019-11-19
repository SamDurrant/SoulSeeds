import React from 'react';
import classes from './TextSide.module.css';

const textSide = (props) => {
  let classList;
  if (props.section) {
    classList = classes.TextSide + ' ' + classes[props.section];
  } else {
    classList = classes.TextSide;
  }

  return (
    <div className={classList}>{props.children}</div>
  )
}

export default textSide;