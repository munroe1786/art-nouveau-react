import React from 'react'
import {Redirect} from 'react-router-dom'
import ArtistEdit from './ArtistEdit'
import WorksContainer from '../containers/WorksContainer'

const Artist = (props) => {

    console.log(props)

    let artist = props.artists.filter(artist => artist.id == props.match.params.id)[0]

    console.log(artist)

    return (
        <div>
        <h2>
            {artist ? artist.name : null} - {artist ? artist.nationality : null}
        </h2>
        <ArtistEdit artist={artist} />
        <WorksContainer artist={artist} />
        </div>
    )

}

export default Artist