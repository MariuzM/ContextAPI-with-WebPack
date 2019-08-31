import React, { Component, createContext } from 'react';

export const _createContext = createContext();

export default class ContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
  };

  toggleButton = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  render() {
    return (
      <_createContext.Provider
        value={{
          ...this.state,
          toggleButton: this.toggleButton
        }}
      >
        {this.props.children}
      </_createContext.Provider>
    );
  }
}
