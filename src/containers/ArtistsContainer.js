import React from 'react'
import {connect} from 'react-redux'
import {fetchArtists} from '../actions/fetchArtists'
import Artists from '../components/Artists'
import ArtistInput from '../components/ArtistInput'

class ArtistsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchArtists()
    }

    render() {
        return (
            <div>
                <ArtistInput/>
                <Artists/>
            </div>
        )

    }


}

const mapStateToProps = state => {
    return {
        artists: state.artists
    }
}

export default connect(mapStateToProps, {fetchArtists})(ArtistsContainer);