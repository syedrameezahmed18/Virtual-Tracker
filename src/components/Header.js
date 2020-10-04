import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import logo from '../images/logo1.png';
import Fade from 'react-reveal/Fade';
import {Route} from 'react-router-dom';
import Trueheader from './trueheader.js';

const Header = () => {

    const scrollDown = () => {
        let scrollPosition =  500;
        window.scrollTo(0, scrollPosition);
    }

    return(
        <div className="mainheader">
            <div className="headershade">
                <Fade left><h2>Home</h2></Fade>
                <Fade right><p onClick={scrollDown}>Checkout the latest item shop!</p></Fade>
        </div>
       
        </div>
    )
}

export default Header;