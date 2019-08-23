import React, { Component } from 'react';
import { data } from './dataDb';
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    this.setState(() => {
      return { products: data };
    });
  };

  testas = () => {
    console.log(state);
  };

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
