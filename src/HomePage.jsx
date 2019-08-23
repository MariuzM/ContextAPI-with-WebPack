import React, { Component } from 'react';
import UserContext from './UserContext';
import { ProductConsumer } from './UserContext';

export default class HomePage extends Component {
  static contextType = UserContext;
  componentDidMount() {
    const user = this.context;
    console.log(user);
  }

  render() {
    return (
      <ProductConsumer>
        {props => {
          return <div>{props.name}</div>;
        }}
      </ProductConsumer>
    );
  }
}
