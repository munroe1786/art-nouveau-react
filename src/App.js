import React from 'react';
import {connect} from 'react-redux'
import {fetchArtists} from './actions/fetchArtists'
import ArtistsContainer from './containers/ArtistsContainer'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchArtists({type: 'FETCH_ARTISTS', payload: {name: 'Artist'}})
  }

  //fetches all artists from api

  render() {
    return (
      <div className="App">
        <ArtistsContainer/>
      </div>
  );
}
}

//const mapStateToProps = (state) => {
  //return {

  //}
//}
//}

export default connect(null, {fetchArtists})(App);
