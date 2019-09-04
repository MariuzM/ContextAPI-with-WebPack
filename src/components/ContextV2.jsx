import React from 'react';
import BookList from './ContextV2/BookList';
import Navbar from './ContextV2/Navbar';
import { ContextProvider } from './ContextV2/_context';
import ToggleButton from './ContextV2/ToggleButton';

export default function Context() {
  return (
    <div className="App">
      <ContextProvider>
        <Navbar />
        <BookList />
        <ToggleButton />
      </ContextProvider>
    </div>
  );
}
