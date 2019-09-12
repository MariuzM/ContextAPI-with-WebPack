import React, { useContext } from 'react'
import UserContext from './Context'
import { ProductConsumer } from './Context'
import Button from '@material-ui/core/Button'

export default function ContextConsumerFunction(propFromContextConsumerFunction) {
  console.log(propFromContextConsumerFunction)
  const user = useContext(UserContext)
  console.log(user)

  return (
    <ProductConsumer>
      {props => {
        return (
          <Button variant="contained" color="secondary">
            {props.name}
          </Button>
        )
      }}
    </ProductConsumer>
  )
}
