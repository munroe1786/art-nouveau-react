import React from 'react'
import {Redirect} from 'react-router-dom'

const Artist = (props) => {

    let artist = props.artists[props.match.params.id - 1]
    console.log(artist)
    return (
        <li>
            {artist ? null : <Redirect to='/artists'/>}
            
            {artist ? artist.name : null}
        </li>
    )

}

export default Artist