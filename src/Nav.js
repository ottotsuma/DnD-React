import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

 const Nav: React.FC = props => {
    return (
        <nav className="Nav" fixed="top">
            <h3>Navigation</h3>
          <Link to={'/'}>Monsters</Link>
        </nav>
    );
  };

  export default Nav