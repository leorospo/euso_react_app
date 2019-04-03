import React from 'react';
import Grid from './Grid.css';
import MediaImg from './MediaImg.js'

export default class Grids extends React.Component{
     constructor(props){
        super(props)
        this.state={
            mediaProfile:[
                {mediaImg:'6_jhon.jpg'},
                {mediaImg:'6_jhon.jpg'},
                {mediaImg:'6_jhon.jpg'},
                {mediaImg:'6_jhon.jpg'},
                
            ]
        }
    }


render(){
    return(
       <div className="cont-media-profile">
            <ul className="media-grid-profile">
                {this.state.mediaProfile.map((el,index)=> <MediaImg key={index} img={el}/>)}    
            </ul>
        </div>
    )
}
}

