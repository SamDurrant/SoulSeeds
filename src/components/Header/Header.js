import React from 'react';
import classes from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import Button from '../../elements/Button/Button';

const header = (props) => {
  return (
    <header className={classes.Header}>
      <Navigation/>
      <div className={classes.Container}>
        <h1 className={classes.PrimaryHeading}>Soul Seeds</h1>
        <p className={classes.HeadingBlurb}>a seed-based subscription for the mind and for the home</p>
        <Button content={"plant it"}/>
      </div>
    </header>
  )
}

export default header;