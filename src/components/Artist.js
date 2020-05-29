import React from 'react'

const Artist = (props) => {
    console.log(props)

    let artist = props.artists[props.match.params.id - 1]
    console.log(artist)
    return (
        <li>
            
            {artist ? artist.name : null}
        </li>
    )

}

export default Artist