import React, { Component,Fragment } from 'react';
import ItemChamber from './itemchamber.js';
import Tab1 from './tab1.js';
import Tab2 from './tab2.js';
import Tab3 from './tab3.js';
import Tab4 from './tab4.js';
import Tab5 from './tab5.js';
import Tab6 from './tab6.js';
import Tab7 from './tab7.js';
import Tab8 from './tab8.js';
import '../App.css';
import Fade from 'react-reveal/Fade';
import {Tabs,Tab,AppBar} from '@material-ui/core';


class Alldata extends Component {

    constructor()
    {
        super()
        
            this.state={
                allitem:[],
                selectedtab:0
                
            }
            this.myRef = React.createRef()
    }

    filteration = (e) => { 
        e.preventDefault();
        this.myRef.value.includes()
    }

    handleChange = (e, newval) => {
        this.setState({selectedtab:newval});
    }

    backtotop = () => {
        
        window.scrollTo(0,700);
    }
    componentDidMount(){
        const allapi="https://fortnite-api.theapinetwork.com/items/list";

       
        fetch(allapi)
            .then(resp=>resp.json())
                .then(bigdata => {
                    console.log(bigdata);
                    this.setState({allitem:bigdata.data})
                })
    }

    render(){
        let {allitem} = this.state;
        /*const filtereditems = allitem.filter(item=>{
            return item.item.toLowerCase().includes(this.myRef.value.toLowerCase());
        })*/
    return(
        <Fragment>
         <div className="mainheader2">
            <div className="headershade">
                <Fade left><h2>Item Vault</h2></Fade>
                <Fade right><p onClick={this.scrollDown}>Explore any existing item in the game!</p></Fade>
        </div>
        </div> 

         
        <div className="distance">
        <AppBar position ="static" >
        <Tabs value={this.state.selectedtab} onChange={this.handleChange}>
            <Tab label="Page1"/>
            <Tab label="Page2"/>
            <Tab label="Page3"/>
            <Tab label="Page4"/>
            <Tab label="Page5"/>
            <Tab label="Page6"/>
            <Tab label="Page7"/>
            <Tab label="Page8"/>
            
            </Tabs>
        </AppBar>
        </div>

        {this.state.selectedtab === 0 && (
        <Fragment>
        <div className="cardsholdershift">
            {
                allitem.map((items,id)=>{
                    return(
                    <Tab1 
                    id={id}
                    itemname={items.item.name}
                    itempic={items.item.images.background} 
                    itemdesc={items.item.description}
                    itemrar={items.item.rarity}/>
                    )
                })
            }
        </div>
        <button onClick={this.backtotop} className="btn btn-outline-success">Back to top</button>
        </Fragment>
        )}
        { this.state.selectedtab ===1 && (
            <Fragment>
            <div className="cardsholdershift">
            {
                allitem.map((items,id)=>{
                    return(
                    <Tab2 
                    id={id}
                    itemname={items.item.name}
                    itempic={items.item.images.background} 
                    itemdesc={items.item.description}
                    itemrar={items.item.rarity}/>
                    )
                })
            }
        </div>
        <button  onClick={this.backtotop} className="btn btn-outline-success">Back to top</button>
        </Fragment>
        )}
        { this.state.selectedtab === 2 && (
            <div className="cardsholdershift">
            {
                allitem.map((items,id)=>{
                    return(
                    <Tab3 
                    id={id}
                    itemname={items.item.name}
                    itempic={items.item.images.background} 
                    itemdesc={items.item.description}
                    itemrar={items.item.rarity}/>
                    )
                })
            }
        </div>
        )}
        { this.state.selectedtab === 3 && (
            <div className="cardsholdershift">
            {
                allitem.map((items,id)=>{
                    return(
                    <Tab4 
                    id={id}
                    itemname={items.item.name}
                    itempic={items.item.images.background} 
                    itemdesc={items.item.description}
                    itemrar={items.item.rarity}/>
                    )
                })
            }
        </div>
        )}
        { this.state.selectedtab === 4 && (
            <div className="cardsholdershift">
            {
                allitem.map((items,id)=>{
                    return(
                    <Tab5 
                    id={id}
                    itemname={items.item.name}
                    itempic={items.item.images.background} 
                    itemdesc={items.item.description}
                    itemrar={items.item.rarity}/>
                    )
                })
            }
        </div>
        )}
        {this.state.selectedtab === 5 && (
            <div className="cardsholdershift">
            {
                allitem.map((items,id)=>{
                    return(
                    <Tab6 
                    id={id}
                    itemname={items.item.name}
                    itempic={items.item.images.background} 
                    itemdesc={items.item.description}
                    itemrar={items.item.rarity}/>
                    )
                })
            }
        </div>
        )}
        {this.state.selectedtab === 6 && (
            <div className="cardsholdershift">
            {
                allitem.map((items,id)=>{
                    return(
                    <Tab7 
                    id={id}
                    itemname={items.item.name}
                    itempic={items.item.images.background} 
                    itemdesc={items.item.description}
                    itemrar={items.item.rarity}/>
                    )
                })
            }
        </div>
        )}
        {this.state.selectedtab === 7 && (
            <div className="cardsholdershift">
            {
                allitem.map((items,id)=>{
                    return(
                    <Tab8 
                    id={id}
                    itemname={items.item.name}
                    itempic={items.item.images.background} 
                    itemdesc={items.item.description}
                    itemrar={items.item.rarity}/>
                    )
                })
            }
        </div>
        )}
        
        
        </Fragment>
    )

    }
}
export default Alldata;