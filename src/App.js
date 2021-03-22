import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo, productDataThree } from './components/Products/data';
import Feature from './components/Feature';
import Feature1 from './components/Feature1';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <h1><hr></hr></h1>
      <Products heading='Choose your favorite' data={productData} />
      <h1><hr></hr></h1>
      <Feature />
      <h1><hr></hr></h1>
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      
      <Products heading='' data={productDataThree} />
      <h1><hr></hr></h1>
      <Feature1 />
      <h1><hr></hr></h1>
      <Footer />
      <h1><hr></hr></h1>
    </Router>
  );
}export default App;





    
