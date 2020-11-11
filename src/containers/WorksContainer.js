import React from 'react'
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

export default WorksContainer
