import React from 'react';
import Header from '../Header/Header';
import Info from '../Info/Info';
import HowItWorks from '../HowItWorks/HowItWorks';
import ShopBoxes from '../ShopBoxes/ShopBoxes';
import Purpose from '../Purpose/Purpose';
import CTA from '../CTA/CTA';

const home = (props) => {
  return (
    <main>
      <Header/>
      <Info/>
      <HowItWorks/>
      <ShopBoxes id={'ourboxes'} updateCart={props.updateCart}/>
      <Purpose id={'ourpurpose'}/>
      <CTA/>
    </main>
  )
}

export default home;