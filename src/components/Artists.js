import React from 'react'

//set up to receive props.  props is being passed from artistsContainer 
//props creates an object of all the props being passed in


const Artists = (props) => {

    return (
        <div>
            {props.artists.map(artist => 
            <li>
                {artist.name} - {artist.year_of_birth} {artist.year_of_death} {artist.years_active} {artist.nationality}
            </li>)}
        </div>
    )

}

export default Artists