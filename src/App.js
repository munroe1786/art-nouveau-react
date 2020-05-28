import React from 'react';
import {connect} from 'react-redux'
import {fetchArtists} from './actions/fetchArtists'

class App extends React.Component {

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/artists`)
    .then(res => res.json())
    .then(data => console.log(data))
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
