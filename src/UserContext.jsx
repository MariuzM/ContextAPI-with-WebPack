import React from 'react';

const UserContext = React.createContext();

export const ProductProvider = UserContext.Provider;
export const ProductConsumer = UserContext.Consumer;
export default UserContext;
