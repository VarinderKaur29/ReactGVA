import React from 'react';
import { FeatureContainer, FeatureButton } from './Feature1Elements';

const Feature1 = () => {
  return (
    <FeatureContainer>
      <h1>Drink of the Day</h1>
      <p>Pops are free if Order 2 Pizza.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature1;