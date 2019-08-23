// import React, { Component } from 'react';
// import { data } from './dataDb';

// const ProductContext = React.createContext();

// class ProductProvider extends Component {
//   state = {
//     // products: data.title
//     products: 'test'
//   };

//   componentDidMount() {
//     this.setProducts();
//   }

//   setProducts = () => {
//     console.log(this.state);
//   };

//   // componentDidMount() {
//   //   this.setProducts();
//   // }

//   // setProducts = () => {
//   //   let tempProducts = [];
//   //   data.forEach(item => {
//   //     console.log(item);
//   //   });
//   //   this.setState(() => {
//   //     return tempProducts;
//   //   });
//   // };

//   render() {
//     return (
//       <ProductContext.Provider value={{ ...this.state }}>
//         {this.state.products}
//         {/* {console.log(this.state)} */}
//         {/* {this.props.children} */}
//       </ProductContext.Provider>
//     );
//   }
// }

// // export const ProductProvider = ProductProvider.Provider;
// // export const ProductConsumer = ProductContext.Consumer;
// // export default ProductProvider;

// const ProductConsumer = ProductContext.Consumer;
// export { ProductProvider, ProductConsumer };

import React from 'react';
const UserContext = React.createContext();

function Prod() {
  const user = {
    name: 'Tania',
    loggedIn: true
  };

  return <ProductProvider value={user.name}>Test</ProductProvider>;
}

export const ProductProvider = UserContext.Provider;
export const ProductConsumer = UserContext.Consumer;
export default { UserContext, Prod };
