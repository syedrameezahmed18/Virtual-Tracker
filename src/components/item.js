import React, { Component,useState,useEffect,Fragment } from 'react';
import '../App.css';
import Itemzoom from './itemzoom';
import Itempage from './newpageitem';
import {Link} from 'react-router-dom'

const Item = ({itempic,itemname,itemdesc,itemrar,itemcost,itemoccur,itembigpic,itemid,iamall}) => {

    let [isselected,setisselected] = useState(false);
    let [reved,setreved] = useState(false);
    

    /*const maximizer = () => {
        
        setisselected(isselected=true);
        window.scrollTo(0,70);
        setreved(reved=true);



    }
    const minimizer = () => {
        
        setisselected(isselected=false);
    }*/

    return(

        <Fragment>
        {/*{console.log('render')}
        <div onClick={maximizer}  class="card" >
            <img src={itempic} width="95%" class="card-img-top" alt="..."/>
            <div 
            className={` ${itemrar==='uncommon'?'green-card':`${itemrar==='rare'?'blue-card':
            `${itemrar==='epic'?'purple-card':`${itemrar==='legendary'?'orange-card':''}`}`}`}`} >
                <p class="card-text t1">{itemname}</p>
                <p class="card-text t2">{itemrar}</p>
                <p class="card-text t3">{itemdesc}</p>
            </div>
        </div>
        {(isselected === true)  && (<Itemzoom signal={minimizer}
                                   bigpic={itembigpic}
                                   occur={itemoccur}
                                   name={itemname}
                                   desc={itemdesc}
                                   cost={itemcost}
                                   rarity={itemrar} 
        revsignal={reved}/>)}*/}

        {   ((iamall != undefined) || (iamall != '')) 
            ?(<Link to={`/specificitem/${itemname}/${itemcost}/${itemoccur}/${itemrar}/${itemdesc}/${iamall}`}>
                <div class="card">
                    <img src={itempic} width="95%" class="card-img-top" alt="..."/>
                    <div 
                    className={` ${itemrar==='uncommon'?'green-card':`${itemrar==='rare'?'blue-card':
                    `${itemrar==='epic'?'purple-card':`${itemrar==='legendary'?'orange-card':''}`}`}`}`} >
                        <p class="card-text t1">{itemname}</p>
                        <p class="card-text t2">{itemrar}</p>
                        <p class="card-text t3">{itemdesc}</p>
                    </div>
                </div>
            </Link>)
            :(<Link to={`/item/${itemid}/${itemname}/${itemcost}/${itemoccur}/${itemrar}/${itemdesc}/${itembigpic}`}>
                <div class="card">
                    <img src={itempic} width="95%" class="card-img-top" alt="..."/>
                    <div 
                    className={` ${itemrar==='uncommon'?'green-card':`${itemrar==='rare'?'blue-card':
                    `${itemrar==='epic'?'purple-card':`${itemrar==='legendary'?'orange-card':''}`}`}`}`} >
                        <p class="card-text t1">{itemname}</p>
                        <p class="card-text t2">{itemrar}</p>
                        <p class="card-text t3">{itemdesc}</p>
                    </div>
                </div>
            </Link>)
        }
    
        </Fragment>
    )
}

export default Item;