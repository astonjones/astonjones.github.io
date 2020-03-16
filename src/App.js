import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div>
      <Navigation />
        <Home />
        <About />
        <Work />
        <Contact />
    </div> 
  );
}

export default App;
