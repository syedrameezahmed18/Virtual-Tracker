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
import Itempage from './components/newpageitem.js'
import Specific from './components/searchitemspec.js'

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
        <Route path="/item/:itemid/:itemname/:itemcost/:itemoccur/:itemrar/:itemdesc" 
         component={Itempage}/>
        <Route path="/specificitem/:itemname/:itemcost/:itemoccur/:itemrar/:itemdesc/:iamall" 
         component={Specific}/>
     </Switch>}
    </div>
  );
}

export default App;
