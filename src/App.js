import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import HowItWorks from './components/HowItWorks/HowItWorks';
import ShopBoxes from './components/ShopBoxes/ShopBoxes';
import Purpose from './components/Purpose/Purpose';
import CTA from './components/CTA/CTA';

function App() {
  return (
    <div className="App">
      <Header/>
      <Info/>
      <HowItWorks/>
      <ShopBoxes/>
      <Purpose/>
      <CTA/>
    </div>
  );
}

export default App;
