import React, { Component, createContext, useState } from 'react';

export const _createContext = createContext();

export default class ContextProvider extends Component {
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

// const ContextProvider = props => {
//   const initialState = {
//     isLightTheme: true,
//     light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
//     dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
//   };
//   const [state, setState] = useState(initialState);
//   const toggleButton = isLightTheme => {
//     setState([...state, { isLightTheme: !isLightTheme }]);
//   };
//   return (
//     <_createContext.Provider
//       value={{
//         ...state,
//         toggleButton
//       }}
//     >
//       {props.children}
//     </_createContext.Provider>
//   );
// };
// export default ContextProvider;

// export default function ContextProvider(props) {
//   const initialState = {
//     isLightTheme: true,
//     light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
//     dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
//   };
//   const [ui, setUi] = useState(initialState);
//   const [ui2, setUi2] = useState(initialState.isLightTheme);
//   const toggleButton = ({ ui2 }) => {
//     setUi2(ui2 => !ui2);
//   };
//   // function toggleButton() {
//   //   setUi(isLightTheme => !isLightTheme);
//   // }
//   return (
//     <>
//       <_createContext.Provider
//         value={{
//           ...ui,
//           toggleButton
//         }}
//       >
//         {props.children}
//       </_createContext.Provider>
//       {/* <button onClick={() => setUi2(ui2 => !ui2)}>Toggle Theme</button> */}
//     </>
//   );
// }
