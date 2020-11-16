import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({}) => {
  return (
    <section id="navigation">
      <nav className="bg-green-400 py-4 mb-8">
        <Link className="px-4" to={{
          pathname: `/artists`
        }}>
          Artists
        </Link>
        <Link className="px-4" to={{
          pathname: `/works`
        }}>
          Works
        </Link>
      </nav>
    </section>
  )
}

export default Navbar
