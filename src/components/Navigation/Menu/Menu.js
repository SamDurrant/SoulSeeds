import React from 'react';
import classes from './Menu.module.css';
import Backdrop from '../../../elements/Backdrop/Backdrop';

const menu = (props) => {
  let classList = [classes.Menu, classes.Close];
  let lis = ['how it works', 'our boxes', 'our purpose'];
  
  let liClass = [classes.Hide];
  if (props.open) {
    classList = [classes.Menu, classes.Open];
    liClass = [classes.Show]; 
  }
  
  let counter = 1.2;
  let delayedLis = lis.map((navItem, i) => {
    let delayTimer = { transition: `all ${counter}s ease-in-out` }
    counter += 1.2;

    return <li className={liClass} style={delayTimer} key={i}><a href="/">{navItem}</a></li>
  })

  return ( 
    <React.Fragment>
      <Backdrop 
        show={props.open}
        clickClose={props.closeMenu}/>
      <div className={classList.join(' ')}>
        <h3>Soul Seeds</h3>
        <nav>
          <ul className={classes.NavigationItems}>
            {delayedLis}
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default menu;