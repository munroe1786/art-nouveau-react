import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
//import NavBar from './NavBar';


import ArtistsContainer from './containers/ArtistsContainer';
import { fetchArtists } from './actions/fetchArtists';


class App extends React.Component {
  componentDidMount() {
    this.props.fetchArtists()
  };
  
  //consolelog(this.props)
  
  // old method - componentDidMount() {
    //this.props.fetchArtists({type: 'FETCH_ARTISTS', payload: {name: 'Artist'}})
  //}

  //fetches all artists from api

  render() {
    return (
      <div className="App">
        <h1>Welcome to Art Nouveau Collector</h1>
        <h3>Click on an artist's name below to learn about them and their work</h3>
        <Switch>
          <Route path='/artists' render={(routerProps) => <ArtistsContainer {...routerProps} />} />
        </Switch>
      </div>
  );
}
}

//const mapState = (state) => {
  //return {
    //artistId: state.artist.id
  //}
//}


export default connect(null, { fetchArtists })(App);
