import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
<button className={classes.Button}>{props.content}</button>
)

export default button;