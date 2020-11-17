import React from 'react'
import Artist from './Artist';
import { Link } from 'react-router-dom'


//set up to receive props.  props is being passed from artistsContainer 
//props creates an object of all the props being passed in
//this component responsible for rendering each artist


const Artists = ({ artists }) => {
    return (
        <ul>
            {artists.map(artistAttributes => 
                <Artist
                    key={artistAttributes.id}
                    {...artistAttributes}
                />)
            }
        </ul> 
    )
}

export default Artists