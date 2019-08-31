import React, { Component } from 'react';
import { _createContext } from './_context';

export default class BookList extends Component {
  static contextType = _createContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{
          background: theme.bg,
          color: theme.syntax
        }}
      >
        <ul>
          <li style={{ background: theme.ui }}>1st Chapter</li>
          <li style={{ background: theme.ui }}>2nd Chapter</li>
          <li style={{ background: theme.ui }}>3rd Chapter</li>
        </ul>
      </div>
    );
  }
}
