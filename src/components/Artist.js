import React from 'react'
import {Redirect} from 'react-router-dom'
import WorksContainer from '../containers/WorksContainer'

const Artist = (props) => {

    let artist = props.artists[props.match.params.id - 1]
    console.log(artist)
    return (
        <div>
        <h2>
            {artist ? null : <Redirect to='/artists'/>}
            
            {artist ? artist.name : null}
        </h2>
        WorksContainer
        </div>
    )

}

export default Artist