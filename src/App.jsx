// // import React, { Component } from 'react';
// // import PassingFromContext from './context/PassingFromContext';
// // import Prod from './context/context';

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <Prod>Test</Prod>
// //         {/* <PassingFromContext /> */}
// //       </div>
// //     );
// //   }
// // }

// import React, { useContext, Component } from 'react';

// const UserContext = React.createContext();
// const ProductProvider = UserContext.Provider;
// const ProductConsumer = UserContext.Consumer;

// function App() {
//   const user = {
//     name: 'Tania',
//     loggedIn: true
//   };

//   // const user2 = useContext(UserContext);
//   // console.log(user2);

//   return (
//     <div>
//       <HomePage></HomePage>
//       <ProductProvider value={user}>Test</ProductProvider>
//       <ProductConsumer>
//         {props => {
//           return <div>{props}</div>;
//         }}
//       </ProductConsumer>
//     </div>
//   );
// }

// class HomePage extends Component {
//   static contextType = UserContext;

//   componentDidMount() {
//     const user = this.context;
//     console.log(user); // { name: 'Tania', loggedIn: true }
//   }

//   render() {
//     return (
//       <ProductConsumer>
//         {props => {
//           return <div>{props.name}</div>;
//         }}
//       </ProductConsumer>
//     );
//   }
// }

// export default App;

import React from 'react';
import HomePage from './HomePage';
import { ProductProvider } from './UserContext';

export default function App() {
  const user = { name: 'Marius', value: true };

  return (
    <ProductProvider value={user}>
      <HomePage />
    </ProductProvider>
  );
}
