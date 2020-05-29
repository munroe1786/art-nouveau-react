import React from 'react'

const Artist = (props) => {
    console.log(props)
    return (
        <div>
            {props.artist.name} 
        </div>

    )

}

export default Artist