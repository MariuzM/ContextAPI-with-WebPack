import React, { Component } from 'react';
import { data } from './dataDb';
const ProductContext = React.createContext();

console.log(data);

class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="hello from context">
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
