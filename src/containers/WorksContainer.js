import React, { Component } from 'react';
import { connect } from 'react-redux'
import WorkInput from '../components/WorkInput'
import Works from '../components/Works'

class WorksContainer extends React.Component {

    render() {
        return (
            <div>
                <Works works={this.props.artist && this.props.artist.works}/>
                <WorkInput artist={this.props.artist}/>
            </div>
        )
    }


}

const mapStateToProps = ({ artists, works }) => {
    return {
        works: works.items.map(workId => 
            works.itemsById[workId]),
        artists: artists.items.map(artistId =>
            artists.itemsById[artistId])
    }
}

export default connect(mapStateToProps)(WorksContainer);
