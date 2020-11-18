import React, { Component } from 'react';
import Artists from '../components/Artists';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Artist from '../components/Artist';
import ArtistInput from '../components/ArtistInput';

import { fetchArtists, FETCHING_ARTISTS, RECEIVE_ARTISTS } from '../actions';

class ArtistsContainer extends Component {

    constructor(props) {
        super(props);
        this.renderLoadedContent = this.renderLoadedContent.bind(this)
    }

    //react/redux do not hold state when page is refreshed---componentDidMount allows 
    //state to be displayed again---makes fetch request to the backend--every time 
    //component is mounted, the fetch request is made

    componentDidMount() {
        this.props.fetchArtists()
    }
    //send artists to our artists to give access
    //getting artists from our redux store, accessing them thru props inside this 
    //component and then sending those artists down to our artists component

    //ArtistsContainer is a list of all our artists

    renderLoadedContent() {
        return (
            <React.Fragment>
                <Artists
                    artists={this.props.artists}
                />
                <NavLink to="/artists/new">Add New Artist</NavLink>
            </React.Fragment>
        )
    }

    //render() {
        //return (
               // <div>
                    //<Route exact path='/artists' render={(routerProps) => <Artists {...routerProps} artists={this.props.artists}/> } />
                    ////<Route path='/artists/new' component={ArtistInput} />
                    //<Route path='/artists/:id' render={(routerProps) => <Artist {...routerProps} artists={this.props.artists}/> } />
                    //<br />
                    //<NavLink to="/artists/new">Add New Artist</NavLink>
                //</div>
        //)
        //artists={this.props.artists} - get access to our artists as props in our store 

    //}

    render() {
        return (
            <section>
                <h4>Artists</h4>
                {this.props.loading ? 'Loading...' : this.renderLoadedContent()}
            </section>
        )
    }
}

//mapStateToProps gets access to artists in our redux store, mapping 
//them to props and send them to our artists component

const mapStateToProps = ({ artists }) => {
    return {
        artists: artists.items.map(artistId => artists.itemsById[artistId]),
        loading: artists.loading
    }
}

export default connect(mapStateToProps, { fetchArtists })(ArtistsContainer);

//added fetchArtists as second argument to connect so that when we call this.props.fetchArtists it will actually update our redux store--would not happen otherwise

//setting up routes in this component because it's connected to the store

////<Route path='/artists/:id' render={(routerProps) => <Artist {...routerProps} artists={this.props.artists}/>} />