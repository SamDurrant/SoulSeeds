import React from 'react';
import classes from './Navigation.module.css';

const navigation = (props) => {
  return (
    <nav className={classes.Navigation}>
      <button 
        className={classes.MenuBtn}
        onClick={props.toggleMenuClicked}>menu</button>
      <div 
        className={classes.CartBtn} 
        onClick={props.toggleCartClicked}>{props.cartItems}</div>
    </nav>
  )
}

export default navigation;