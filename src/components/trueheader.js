import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import logo from '../images/subo.png';
import Fade from 'react-reveal/Fade';
import {Route} from 'react-router-dom';

const Trueheader = () => {
    return(
        <div className="header">
            <Link to ="/"><div className="logoportion">
                <img src={logo} height="55px" width="80px" />
                <p className="spec">Tracker</p>
            </div></Link>
            <div className="navs">
                <Link to ="/about"><p>About</p></Link>
                <Link to ="/all"><p>All items</p></Link>
                <Link to ="/search"><p>Search</p></Link>
                <Link to ="/"><p>Home</p></Link>  
            </div>
        </div>
    )
}

export default Trueheader;