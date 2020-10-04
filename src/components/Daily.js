import React, { Component,useEffect,useState,Fragment } from 'react';
import Item from './item.js';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
class Daily extends Component {

    constructor()
    {
        super()
        this.state={
            items:[]
        }
    }

    scrollDown = () => {
        let scrollPosition =  500;
        window.scrollTo(0, scrollPosition);
    }

    componentDidMount(){
        const dailyapi = 'https://fortnite-api.theapinetwork.com/store/get';
        fetch(dailyapi)
            .then(resp=>resp.json())
                .then( maindata => {
                    this.setState({items:maindata.data})
                    console.log(this.state.items);
                })
    }
    

   
    render(){
        let {items} = this.state;
    return(
        <Fragment>
        <div className="mainheader">
            <div className="headershade">
                <Fade left><h2>Home</h2></Fade>
                <Fade right><p onClick={this.scrollDown}>Checkout the latest item shop!</p></Fade>
        </div>
        </div>
        <Fragment>
            {  items.length === 0 ? (
                <div class="progress">
                <div class="indeterminate"></div>
            </div>
            ):(

        <div className="Daily">
            <LightSpeed left><p className="heads">Daily Shop : {`${this.state.items.length} items`}</p></LightSpeed>
            <div className="cardsholder">
                {
                    items.map((item,id)=>{
                        return(

                        <Fade left>
                            <Item itempic={item.item.images.background} 
                              itemname={item.item.name}
                              itemdesc={item.item.description}
                              itemrar={item.item.rarity}
                              itemcost={item.store.cost}
                              itembigpic={item.item.images.featured}
                              itemoccur={item.store.occurrences}/></Fade>
                        )
                    })
                }
            </div>
        </div>)
            }
        </Fragment>
        </Fragment>
    )
}
}

export default Daily;