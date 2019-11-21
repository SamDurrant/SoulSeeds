import React from 'react';
import Navigation from '../Navigation/Navigation';
import Menu from '../Navigation/Menu/Menu';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Info from '../Info/Info';
import HowItWorks from '../HowItWorks/HowItWorks';
import ShopBoxes from '../ShopBoxes/ShopBoxes';
import Purpose from '../Purpose/Purpose';
import CTA from '../CTA/CTA';

class Layout extends React.Component {
  state = { 
    showCart: false,
    showMenu: false,
    shoppingCart: {
      'The Sapling': {
        quantity: 0,
        price: 0,
        subscription: 1,
        subscriptionValue: 30
      },
      'The Forest': {
        quantity: 0,
        price: 0,
        subscription: 12,
        subscriptionValue: 22
      }
    },
    totalItems: 0,
    totalPrice: 0
  }

  closeCartHandler = () => {
    this.setState({ showCart: false });
  }

  closeMenuHandler = () => {
    this.setState({ showMenu: false });
  }

  toggleCartHandler = () => {
    this.setState((prevState) => {
      return { showCart: !prevState.showCart };
    })
    this.closeMenuHandler();
  }

  toggleMenuHandler = () => {
    this.setState((prevState) => {
      return { showMenu: !prevState.showMenu };
    })
    this.closeCartHandler();
  }

  updateCartHandler = (type, price, maths) => {
    const oldBox = this.state.shoppingCart[type];
    let updatedBoxCount;
    if (maths === 'add') {
      updatedBoxCount = parseInt(oldBox.quantity) + 1;
    } else if (maths === 'minus') {
      updatedBoxCount = parseInt(oldBox.quantity) - 1;
    }
    const updatedBoxPrice = updatedBoxCount * parseInt(price);
    let updatedBoxes = {
      ...this.state.shoppingCart
    }
    updatedBoxes[type].quantity = updatedBoxCount;
    updatedBoxes[type].price = updatedBoxPrice;

    const oldTotalItems = this.state.totalItems;
    let updateTotalItems;
    if (maths === 'add') {
      updateTotalItems = oldTotalItems + 1;
    } else if (maths === 'minus') {
      updateTotalItems = oldTotalItems - 1;
    }

    let updatedItems = {
      ...this.state.totalItems
    }
    updatedItems = updateTotalItems;

    const updatedTotalPrice = this.calculateTotal(oldBox);
    let updatedTotal = {
      ...this.state.totalPrice
    }
    updatedTotal = updatedTotalPrice;

    this.setState({ 
      shoppingCart: updatedBoxes,
      totalItems: updatedItems,
      totalPrice: updatedTotal
    });
  }

  calculateTotal = () => {
    let types = Object.keys(this.state.shoppingCart);
    let total = 0;
    types.forEach(boxType => {
      total += this.state.shoppingCart[boxType].quantity * this.state.shoppingCart[boxType].subscriptionValue * this.state.shoppingCart[boxType].subscription;
    })
    return total;
  }

  render() { 
    return ( 
      <React.Fragment>
        <Navigation 
          toggleMenuClicked={this.toggleMenuHandler}
          toggleCartClicked={this.toggleCartHandler}
          cartItems={this.state.totalItems}/>
        <Menu 
          open={this.state.showMenu}
          closeMenu={this.closeMenuHandler}/>
        <Cart
          open={this.state.showCart}
          closeCart={this.closeCartHandler}
          cartData={this.state.shoppingCart}
          totalPrice={this.state.totalPrice}
          updateCart={this.updateCartHandler}/>
        <main>
          <Header/>
          <Info/>
          <HowItWorks/>
          <ShopBoxes updateCart={this.updateCartHandler}/>
          <Purpose/>
          <CTA/>
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;