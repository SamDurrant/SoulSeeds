import React from 'react';
import classes from './Menu.module.css';
import Backdrop from '../../../elements/Backdrop/Backdrop';

const menu = (props) => {
  let classList = [classes.Menu, classes.Close];
  if (props.open) {
    classList = [classes.Menu, classes.Open];
  }
  return ( 
    <React.Fragment>
      <Backdrop 
        show={props.open}
        clickClose={props.closeMenu}/>
      <div className={classList.join(' ')}>
        <h3>Soul Seeds</h3>
        <nav>
          <ul className={classes.NavigationItems}>
            <li><a href="/">how it works</a></li>
            <li><a href="/">our boxes</a></li>
            <li><a href="/">our purpose</a></li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default menu;