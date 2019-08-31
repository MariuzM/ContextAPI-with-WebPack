import React, { Component, useContext } from 'react';
import { _createContext } from './_context';
import Button from '@material-ui/core/Button';

// ===============================================
// Class base
// ===============================================
// export default class ToggleButton extends Component {
//   static contextType = _createContext;
//   render() {
//     const { toggleButton } = this.context;
//     return <Button onClick={toggleButton}>Toggle Theme</Button>;
//   }
// }

// ===============================================
// Converted to Function base
// ===============================================
// export default function ToggleButton() {
//   return (
//     <_createContext.Consumer>
//       {value => {
//         const { toggleButton } = value;
//         return <Button onClick={toggleButton}>Toggle Theme</Button>;
//       }}
//     </_createContext.Consumer>
//   );
// }

// ===============================================
// Converted to Arrow base
// ===============================================
// const ToggleButton = () => {
// 	return (
//     <_createContext.Consumer>
//       {value => {
//         const { toggleButton } = value;
//         return <Button onClick={toggleButton}>Toggle Theme</Button>;
//       }}
//     </_createContext.Consumer>
// 	)
// }
// export default ToggleButton

// ===============================================
// Converted to Arrow V2 base
// ===============================================
// const ToggleButton = () => (
//   <_createContext.Consumer>
//     {value => {
//       const { toggleButton } = value;
//       return <Button onClick={toggleButton}>Toggle Theme</Button>;
//     }}
//   </_createContext.Consumer>
// );
// export default ToggleButton;

// ===============================================
// Function + Hooks
// ===============================================
export default function ToggleButton() {
  const { toggleButton } = useContext(_createContext);
  return <Button onClick={toggleButton}>Toggle Theme</Button>;
}

// ===============================================
// Arrow + Hooks
// ===============================================
// const ToggleButton = () => {
//   const { toggleButton } = useContext(_createContext);
//   return <Button onClick={toggleButton}>Toggle Theme</Button>;
// };
// export default ToggleButton;
