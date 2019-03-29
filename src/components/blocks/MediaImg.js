import React from 'react';
import Grid from './Grid.css';

export default class MediaImg extends React.Component {

render(){
    const {img}=this.props
    return(
        <li>
            <img className="media-profile-element" src={`assets/img/profile/${img.mediaImg}`}/>
        </li>
    
        
    )
}
}
