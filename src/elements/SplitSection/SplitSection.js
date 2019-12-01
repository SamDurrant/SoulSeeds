import React from 'react';
import classes from './SplitSection.module.css';

const splitSection = (props) => {
  return (
    <section 
      className={classes.SplitSection} 
      id={props.id ? props.id : null}>{props.children}</section>
  )
}

export default splitSection;