import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: 'blue',
}

class NavBar extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <br />
                    <div className="row">
                        <div className="col">
                            <NavLink to='/artists' exact style={link} activeStyle={{ background: 'lightgrey' }}>All Artists</NavLink>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default NavBar;