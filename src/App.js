import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';

import ArtistsContainer from './containers/ArtistsContainer';
import { fetchArtists } from './actions/fetchArtists';


class App extends React.Component {
  componentDidMount() {
    this.props.fetchArtists()
  };
  
  
  // old method - componentDidMount() {
    //this.props.fetchArtists({type: 'FETCH_ARTISTS', payload: {name: 'Artist'}})
  //}

  //fetches all artists from api

  render() {
    return (
      <div className="App">
        <h1>Welcome to Art Nouveau Collector....</h1>
        <Switch>
          <Route path='/artists' render={(routerProps) => <ArtistsContainer {...routerProps} />} />
        </Switch>
      </div>
  );
}
}

//const mapStateToProps = (state) => {
  //return {

  //}
//}
//}

export default connect(null, { fetchArtists })(App);
