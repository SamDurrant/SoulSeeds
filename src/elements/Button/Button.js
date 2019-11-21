import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
  let clickCommand;
  props.click ? clickCommand = props.click : clickCommand = null;
  return (
    <button 
      className={classes.Button}
      onClick={clickCommand}>{props.content}</button>
  )
}

export default button;