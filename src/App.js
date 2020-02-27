import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/work" component={Work}/>
             <Route path="/contact" component={Contact}/>
           </Switch>
        </div> 
      </BrowserRouter>
  );
}

export default App;
