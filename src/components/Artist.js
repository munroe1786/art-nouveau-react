import React from 'react'
import { NavLink } from 'react-router-dom';
import ArtistEdit from './ArtistEdit'
import WorksContainer from '../containers/WorksContainer'

const Artist = ({ id, name, date_of_birth, date_of_death, years_active, nationality  }) => {

    //console.log(props)

    //const artist = props.artists.filter(artist => artist.id == props.match.params.id)[0]

    //const artist = artists.find(artist => artist.id == props.match.params.id)

    //console.log(artist)

    return (
        <div>
            <li>
                {id} -{name} - {date_of_birth} - {date_of_death} - {years_active} - {nationality}
            </li>
            <NavLink to="/artists/:artistId/works/new">Add New Work</NavLink>
        </div>
    )
}

export default Artist

//<h2>
                //{artist ? artist.name : null} - {artist ? artist.nationality : null}
                //- {artist ? artist.date_of_birth : null} - {artist ? artist.date_of_death : null} - 
                //{artist ? artist.years_active : null}
            //</h2>
            //<WorksContainer artist={artist} />
            //<ArtistEdit artist={artist} />
        //</div>