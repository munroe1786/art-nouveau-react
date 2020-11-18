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
        works: works.items.map(workId => works)
        artists: artists.items.map(artistId)
    }
}

export default connect()(WorksContainer);
