import React, { Component } from 'react';
import { data } from './dataDb';
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: data.title
    // products: 'test'
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    console.log(this.state);
  };

  // componentDidMount() {
  //   this.setProducts();
  // }

  // setProducts = () => {
  //   let tempProducts = [];
  //   data.forEach(item => {
  //     console.log(item);
  //   });
  //   this.setState(() => {
  //     return tempProducts;
  //   });
  // };

  render() {
    return (
      <ProductContext.Provider value={{ ...this.state }}>
        {this.state.products}
        {/* {console.log(this.state)} */}
        {/* {this.props.children} */}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
