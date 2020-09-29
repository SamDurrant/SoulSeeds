import React from 'react';
import classes from './Checkout.module.css';
import Heading from '../../elements/Heading/Heading';
import Button from '../../elements/Button/Button';
import image from '../../assets/images/seed-with-sign.jpg';

class Checkout extends React.Component {

  render() {
    return (
      <main className={classes.Checkout}>
        <Heading content={'Order Summary'} />
        <section className={classes.CheckoutInfo}>
          <div className={classes.CheckoutForms}>
            <Heading content={'Customer Info'}/>
            <form className={classes.AccountForm}>
              <h3>Create Account</h3>
              <fieldset>
                <label htmlFor="first-name">first name</label>
                <input type="text" name="first-name"/>
                <label htmlFor="last-name">last name</label>
                <input type="text" name="last-name"/>
                <label htmlFor="email">email</label>
                <input type="email" name="email"/>
                <label htmlFor="password">password</label>
                <input type="password" name="password"/>
              </fieldset>
              <Button content={'Create my account'}/>
              <p className={classes.SignIn}>have an account? <a href="#">Login</a></p>
            </form>
            <form className={classes.ShipForm}>
            <h3>Shipping Address</h3>
              <fieldset>
                <label htmlFor="address">address</label>
                <input type="text" name="address"/>
                <label htmlFor="apt">apt, suite</label>
                <input type="text" name="apt"/>
                <label htmlFor="city">city</label>
                <input type="text" name="city"/>
                <label htmlFor="zip">zip code</label>
                <input type="text" name="zip"/>
                <label htmlFor="phone">phone</label>
                <input type="text" name="phone"/>
              </fieldset>
              <Button content={'Confirm order'}/>
            </form>
          </div>

          <div className={classes.CheckoutContent}>
            <div className={classes.CheckoutCard}>
              <img src={image} alt="plant with sign"/>
              <div className={classes.CheckoutCardInfo}>
                <p>The Sapling Subscription</p>
                <p>Delivered once a month</p>
                <p>Quantity: 2</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Checkout;