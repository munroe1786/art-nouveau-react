import React from 'react'
import {connect} from 'react-redux'
import {fetchArtists} from '../actions/fetchArtists'
import Artists from '../components/Artists'
import ArtistInput from '../components/ArtistInput'

class ArtistsContainer extends React.Component {


    //react/redux do not hold state when page is refreshed---componentDidMount allows state to be displayed again---makes fetch request to the backend--every time component is mounted, the fetch request is made

    componentDidMount() {
        this.props.fetchArtists()
    }
    //send artists to our artists to give access
    //getting artists from our redux store, accessing them thru props inside this component and then sending those artists down to our artists component

    //ArtistsContainer is a list of all our artists

    render() {
        return (
            <div>
                <ArtistInput/>
                <Artists artists={this.props.artists}/>
            </div>
        )
        //artists={this.props.artists} - get access to our artists as props in our store 

    }


}

//mapStateToProps gets access to artists in our store as props and send them to our artists component
const mapStateToProps = state => {
    return {
        artists: state.artists
    }
}

export default connect(mapStateToProps, {fetchArtists})(ArtistsContainer);

//added fetchArtists as second argument to connect so that when we call this.props.fetchArtists it will actually update our redux store--would not happen otherwise