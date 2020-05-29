import React from 'react'
import {Route, Link} from 'react-router-dom'
import Artist from './Artist'

//set up to receive props.  props is being passed from artistsContainer 
//props creates an object of all the props being passed in
//this component responsible for rendering each artist


const Artists = (props) => {
    return (
        <div>
            {props.artists.map(artist => 
                <div key={artist.id}>
                    <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                </div> )}
        </div>
    )
}

export default Artists