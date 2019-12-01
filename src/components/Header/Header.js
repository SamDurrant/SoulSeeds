import React from 'react';
import classes from './Header.module.css';
import Button from '../../elements/Button/Button';
import {Link} from 'react-scroll';

const header = (props) => {
  let content = (
    <Link 
      to={'ourboxes'} 
      smooth={true}>plant it</Link>
  )
  return (
    <header className={classes.Header}>
      <div className={classes.Container}>
        <h1 className={classes.PrimaryHeading}>Soul Seeds</h1>
        <p className={classes.HeadingBlurb}>a seed-based subscription for the mind and for the home</p>
        <Button 
          content={content}/>
      </div>
    </header>
  )
}

export default header;