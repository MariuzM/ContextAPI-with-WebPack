import React, { Component, useContext } from 'react';
import UserContext from './Context';
import { ProductConsumer } from './Context';

// export default class HomePage extends Component {
//   static contextType = UserContext;
//   componentDidMount() {
//     const user = this.context;
//     console.log(user);
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

export default function HomePage() {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <ProductConsumer>
      {props => {
        return <div>{props.name}</div>;
      }}
    </ProductConsumer>
  );
}
