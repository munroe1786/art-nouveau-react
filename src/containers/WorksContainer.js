import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchWorks, fetchArtists } from '../actions'
import Works from '../components/Works'

class WorksContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchArtists();
        this.props.fetchWorks();
    }

    render() {
        return (
            <div>
                <h4>Works</h4>
                {this.props.artists.map(artist =>(
                    <Works
                        works={this.props.works.filter(work => work.artist_id == artist.id)}
                        artist={artist}
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({ artists, works }) => {
    const worksById = works.itemsById;
    const artistsById = artists.itemsById;
    return {
        works: works.items.map(workId => works.itemsById[workId]),
        artists: artists.items.map(artistId => artists.itemsById[artistId])
    }
}

export default connect(mapStateToProps, { fetchWorks, fetchArtists })(WorksContainer);
