import React, { Component,useState,useEffect,Fragment,useRef } from 'react';
import '../App.css';
import Fade from 'react-reveal/Fade';
import Item from './item';

const Searchdom = () => {

    let [datum,setdatum]=useState([]);
    let filtereditems= '';
    let inputref = useRef(null);
    let [inputval,setinputval]=useState('');

    

    useEffect(()=>{
        const allapi="https://fortnite-api.theapinetwork.com/items/list";
        fetch(allapi)
            .then(resp => resp.json())
                .then(hugedata => {
                    setdatum(datum=hugedata.data);
                    console.log(datum);
                     
                })
    },[])

    const Changer = () => {
        setinputval(inputval=inputref.current.value);
        console.log(inputref.current.value);
        window.scrollTo(0,800);
    }

    const alternative = (e) => {
        var key = e.keyCode
        if (key==='13')
        {
            setinputval(inputval=inputref.current.value);
            console.log(inputref.current.value);
            window.scrollTo(0,800);
        }
    }

    filtereditems = datum.filter(data => {
        return (data.item.name.toLowerCase().includes(inputval.toLowerCase()))
    })
    return(
        <Fragment>
            <div className="mainheaderverse">
            <div className="headershade">
                <Fade left><h2>Search Zone</h2></Fade>
                <Fade right><p>Just write and see the filter!</p></Fade>
                <div className="query">
                <p>Search for an item</p>
                <input ref={inputref} onKeyPress={alternative} className="form-control" type="text" />
                <button onClick={Changer} className="btn btn-outline-primary">Search</button>
            </div>
            </div>
            </div>

            <Fragment>
             {    inputval === '' ? (null):(
             <Fragment>    
            <div className="justbelow">   
             <p>Results : {`${filtereditems.length}`}</p> 
            </div>  
            <div className="cardsholder">
                {
                    filtereditems.map((truefilter)=>{
                        return(
                        <Fade left><Item 
                        itemname={truefilter.item.name}
                        itempic={truefilter.item.images.background}
                        itemdesc={truefilter.item.description}
                        itemrar={truefilter.item.rarity}
                        itembigpic={truefilter.item.images.featured}
                        itemoccur={'0'}
                        itemcost={truefilter.item.cost}/></Fade>
                        )
                    })
                }
            </div>
            </Fragment>
             )
            }
            </Fragment>
            
        </Fragment>
    )
}
export default Searchdom;