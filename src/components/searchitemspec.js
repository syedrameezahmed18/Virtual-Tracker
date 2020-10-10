
import React, { Component,useState,useEffect,Fragment } from 'react';
const Specific = (props) => {
    const [image,setimage] = useState([]);
    

    useEffect(()=>{
        const api='https://fortnite-api.theapinetwork.com/items/list'  
        fetch(api)
            .then(resp => resp.json())
                .then(newdata => {
                    setimage(newdata.data);
                    
                })
    },[])
   

    

    return(
        <Fragment>
            
        {   image.map((imt)=> {
                if(imt.item.name === props.match.params.itemname)
                    return(
                        <div className="superfixer">
                            <div className="fixer unjam"  >
                                <div className="leftfix">
                                    <img src={imt.item.images.featured} alt="f"/>
                                </div>
                                <div className="rightfix">
                                    <div className="slices">
                                        <p>Name : {`${props.match.params.itemname}`}</p>
                                        <p>Cost : {`${props.match.params.itemcost}`}</p>
                                        <p>Occurences : {`${props.match.params.itemoccur}`}</p>
                                        <p>Rarity : {`${props.match.params.itemrar}`}</p>
                                    </div>
                                    <div className="descbar">
                                        <p>Description : {`${props.match.params.itemdesc}`}</p>
                                    </div>
                                </div>
                    
                            </div>
                        </div>
                        )
                     else return null;   
        })
        
        }
        </Fragment>
    )
}

export default Specific;













