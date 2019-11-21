import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => {
  let classList = [classes.Backdrop, classes.Hide];
  if (props.show) {
    classList = [classes.Backdrop, classes.Show];
  }
  return ( 
    <div className={classList.join(' ')} onClick={props.clickClose}></div>
  );
}

export default backdrop;