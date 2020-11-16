import React from 'react';
import ArtistsContainer from './containers/ArtistsContainer';
import NavBar from './components./NavBar';
import ArtistInput from './components/ArtistInput';
import WorksContainer from './containers/WorksContainer';
import WorkInput from './components/WorkInput';
import { 
  BrowserRouter as Router,
  Route, 
  Switch 
} from 'react-router-dom';

const App = () => {
    return (
      <Router>
        <NavBar />
        <div className="w-5/6 mx auto">
          <Switch>
            <Route exact path="/artists">
              <ArtistsContainer />
            </Route>
            <Route path="/artists/new" render={(routerProps) =>
              <ArtistInput
                history={routerProps.history}
              />
            }>
            </Route>
            <Route path="/artists/:artistId/works/new" render={(routerProps) =>
              <WorkInput
                artistId={routerProps.match.params.artistId}
                history={routerProps.history}
              />
            }>
            </Route>
            <Route exact path="/works">
                <WorksContainer />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;

//const mapState = (state) => {
  //return {
    //artistId: state.artist.id
  //}
//}

//consolelog(this.props)
  
  // old method - componentDidMount() {
    //this.props.fetchArtists({type: 'FETCH_ARTISTS', payload: {name: 'Artist'}})
  //}

  //fetches all artists from api