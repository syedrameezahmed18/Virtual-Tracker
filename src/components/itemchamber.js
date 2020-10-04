import React, { Component } from 'react';
import {Tabs,Tab,AppBar} from '@material-ui/core';
import Tab1 from './tab1';


class Itemchamber extends Component {

    constructor()
    {
        super()
        this.state={
            selectedtab:0
        }
    }

     handleChange = (e, newval) => {
        this.setState({selectedtab:newval});
    }
    render(){
    return(
        <div>
            <AppBar position ="static">
                <Tabs value={this.state.selectedtab} onChange={this.handleChange}>
                    <Tab label="Page1"/>
                    <Tab label="Page2"/>
                    <Tab label="Page3"/>
                </Tabs>    
            </AppBar>

            {this.state.selectedtab === 0 && <Tab1/>}
             {/*this.state.selectedtab === 1 && <Tab2/>*/}
            {/*this.state.selectedtab === 2 && <Tab3/>*/}
        </div>
    )
    }
}
export default Itemchamber;