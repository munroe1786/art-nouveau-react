import React from 'react'
import Artists from '../components/Artists'
import ArtistInput from '../components/ArtistInput'

class ArtistsContainer extends React.Component {
    render() {
        return (
            <div>
                <ArtistInput/>
                <Artists/>
            </div>
        )

    }


}

export default ArtistsContainer;