import React from 'react'
import ArtistEdit from './ArtistEdit'
import WorksContainer from '../containers/WorksContainer'

const Artist = (props) => {

    //console.log(props)

    const artist = props.artists.filter(artist => artist.id == props.match.params.id)[0]

    //console.log(artist)

    return (
        <div>
            <h2>
                {artist ? artist.name : null} - {artist ? artist.nationality : null}
                - {artist ? artist.date_of_birth : null} - {artist ? artist.date_of_death : null} - 
                {artist ? artist.years_active : null}
            </h2>
            <WorksContainer artist={artist} />
            <ArtistEdit artist={artist} />
        </div>
    )

}

export default Artist