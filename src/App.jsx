import React from 'react';
import { ProductProvider } from './Context/Context';
import ContextConsumerClass from './Context/ContextConsumer - Class';
import ContextConsumerFunction from './Context/ContextConsumer - Function';

export default function App() {
  const classVal = {
    name: 'This is a Class Context',
    value: true
  };

  const functionVal = {
    name: 'This is a Function Context',
    value: true
  };

  return (
    <>
      <ProductProvider value={classVal}>
        <ContextConsumerClass />
      </ProductProvider>
      <br></br>
      <ProductProvider value={functionVal}>
        <ContextConsumerFunction propFromContextConsumerFunction={functionVal.name} />
      </ProductProvider>
    </>
  );
}
