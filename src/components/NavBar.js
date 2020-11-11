import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavBar = ({ artists }) => {
    return (
        <div className="NavBar">
            <NavLink exact activeClassName="active" to="/artists" >Home</NavLink>
        </div>
    )
}

const mapStateToProps = ({ artists }) => {
    return {
        artists
    }
}

export default connect(mapStateToProps)(NavBar);