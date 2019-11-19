import React from 'react';
import classes from './Navigation.module.css';

const navigation = (props) => {
  // eventually the cart will show current items
  
  return (
    <nav className={classes.Navigation}>
      <button className={classes.MenuBtn}>menu</button>
      <div className={classes.Cart}>0</div>
    </nav>
  )
}

export default navigation;