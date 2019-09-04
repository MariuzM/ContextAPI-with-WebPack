import React from 'react';

export const _createContext = React.createContext();

export class ContextProvider extends React.Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
    transition: 'all 1s'
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

// export function ContextProvider({ children }) {
//   const initialState = {
//     isLightTheme: true,
//     light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
//     dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
//   };
//   const [ui, setUi] = React.useState(initialState);
//   const toggleButton = () => setUi({ ...ui, isLightTheme: false });
//   // const toggleButton = () => setUi({ isLightTheme: !isLightTheme });
//   console.log(ui);
//   return (
//     <>
//       <_createContext.Provider
//         value={{
//           ...ui,
//           toggleButton
//         }}
//       >
//         {children}
//       </_createContext.Provider>
//     </>
//   );
// }
