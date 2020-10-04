import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Link,Switch,Route} from 'react-router-dom';
import Daily from './components/Daily'
import Alldata from './components/Alldata'
import Trueheader from './components/trueheader.js'
import Searchdom from './components/searchdom.js'
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Trueheader />
     { <Switch>
        <Route path="/" exact>
          <Daily />
        </Route>
        <Route path="/all">
          <Alldata />
        </Route>
        <Route path="/search">
          <Searchdom />
        </Route>
        <Route path="/about">
          <About />
        </Route>
     </Switch>}
    </div>
  );
}

export default App;
