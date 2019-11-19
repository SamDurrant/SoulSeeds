import React from 'react';
import classes from './SplitSection.module.css';

const splitSection = (props) => {
  return (
    <section className={classes.SplitSection}>{props.children}</section>
  )
}

export default splitSection;