import React from 'react';
import {connect} from 'react-redux'
import {fetchArtists} from './actions/fetchArtists'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchArtists()
  }

  render() {
    return (
      <div className="App">
        App
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
