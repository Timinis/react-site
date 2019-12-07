import React, { useState } from 'react';
import { Page } from './Page';
import { Navbar } from './Navbar';

function App() {
  const [currentPage, pageController] = useState('home');
  return (
    <div>
      <Navbar pageController={pageController} />
      <Page currentPage={currentPage} />
    </div>
  );
}

export default App;
