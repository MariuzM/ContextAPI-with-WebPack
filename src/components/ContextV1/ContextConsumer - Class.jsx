import React, { Component, useContext } from 'react';
import UserContext from './Context';
import { ProductConsumer } from './Context';
import Button from '@material-ui/core/Button';

export default class ContextConsumerClass extends Component {
  static contextType = UserContext;
  componentDidMount() {
    const user = this.context;
    console.log(user);
  }

  render() {
    return (
      <div>
        <ProductConsumer>
          {props => {
            return (
              <Button variant="contained" color="primary">
                {props.name}
              </Button>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
