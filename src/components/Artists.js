import React from 'react'
import Artist from './Artist'

//set up to receive props.  props is being passed from artistsContainer 
//props creates an object of all the props being passed in
//this component responsible for rendering each artist


const Artists = (props) => {
    return (
        <div>
            {props.artists.map(artist => 
            <li key={artist.id}><Artist artist={artist}/></li> )}
        </div>
    )
}

export default Artists