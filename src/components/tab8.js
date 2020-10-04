import React, { Component } from 'react';
import '../App.css';

const Tab8 = ({id,itempic,itemname,itemdesc,itemrar}) => {

    return(
        <React.Fragment>
        {    id >1481 && id<=1660 ? (
            <div class="card" >
            <img src={itempic} width="95%" class="card-img-top" alt="..."/>
            <div 
            className={` ${itemrar==='uncommon'?'green-card':`${itemrar==='rare'?'blue-card':
            `${itemrar==='epic'?'purple-card':`${itemrar==='legendary'?'orange-card':''}`}`}`}`} >
                <p class="card-text t1">{itemname}</p>
                <p class="card-text t2">{itemrar}</p>
                <p class="card-text t3">{itemdesc}</p>
            </div>

        </div>):(null)
        }

        
        </React.Fragment>
        
    )
}

export default Tab8;