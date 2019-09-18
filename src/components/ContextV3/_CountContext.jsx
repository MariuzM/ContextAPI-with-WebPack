import React from 'react'
import PropTypes from 'prop-types'

export const CartContext = React.createContext(null)

export const CartProvider = ({ children }) => {
  const [cartTotal, setCartTotal] = React.useState(0)
  const incrementCartTotal = () => setCartTotal(cartTotal + 1)

  return (
    <CartContext.Provider
      value={{
        cartTotal,
        incrementCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

// export const useCart = () => {
//   const { cartTotal, incrementCartTotal } = React.useContext(CartContext);
//   return { cartTotal, incrementCartTotal };
// };
