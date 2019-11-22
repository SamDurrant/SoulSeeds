import React from 'react';
import Backdrop from '../../elements/Backdrop/Backdrop';
import image from '../../assets/images/seed-with-sign.jpg';
import classes from './Cart.module.css';

const cart = (props) => {
  let classList = [classes.Cart, classes.Close];
  if (props.open) {
    classList = [classes.Cart, classes.Open];
  }

  let shoppingCart = [];
  let types = Object.keys(props.cartData);
  let empty = true;

  types.forEach((boxType, i) => {
    let box = props.cartData[boxType];
    if (box.quantity > 0) {
      shoppingCart.push(
        <div key={i}>
          <p>Item name: <span>{boxType}</span></p>
          <p>Quantity: <span>{box.quantity}</span></p>
          <p>Price: <span>${box.price}</span></p>
          <button 
            className={classes.RemoveItem}
            onClick={() => props.updateCart(boxType, 'minus')}>remove</button>
        </div>
      )
    }
  })
  if (shoppingCart.length > 0) {
    empty = false;
  } else if (empty === true) {
    shoppingCart = (
      <p>Oh no! You're cart is empty!</p>
    )
  }

  return ( 
    <React.Fragment>
      <Backdrop 
        show={props.open}
        clickClose={props.closeCart}/>
      <div className={classList.join(' ')}>
        <div className={classes.ImageContainer}>
          <img src={image} alt="plant next to a motivational sign."/>
        </div>
        <div className={classes.CartData}>
          {shoppingCart}
        </div>
        <div className={classes.CartTotal}>
          <p>Total: <span>${props.totalPrice}</span></p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default cart;