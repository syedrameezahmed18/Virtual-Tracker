import React, { Component } from 'react';
import '../App.css';

const Itemzoom = ({bigpic,occur,name,desc,cost,rarity,signal,revsignal}) => {

    

    return(
        
        <div className={`overload ${revsignal===true ? 'pointerjam': 'unjam' }`} >
            {console.log('childrender')}
        <div className="fixer unjam" onClick={signal} >
            <div className="leftfix">
                <img src={bigpic} alt="f"/>
            </div>
            <div className="rightfix">
                <div className="slices">
                    <p>Name : {`${name}`}</p>
                    <p>Cost : {`${cost}`}</p>
                    <p>Occurences : {`${occur}`}</p>
                    <p>Rarity : {`${rarity}`}</p>
                </div>
                <div className="descbar">
                 <p>Description : {`${desc}`}</p>
                </div>
            </div>
            <div className="cross" onClick={signal}>
                X
            </div>
        </div>
        </div>
    )
}

export default Itemzoom