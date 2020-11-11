import React from 'react'
import { Link } from 'react-router-dom'


//set up to receive props.  props is being passed from artistsContainer 
//props creates an object of all the props being passed in
//this component responsible for rendering each artist


const Artists = (props) => {
    return (
        <div>
            {props.artists && props.artists.map(artist => 
                <li key={artist.id}>
                    <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                </li> 
            )}
        </div>
    )
}

export default Artists