import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
            <div className="nav-wrapper  container">
              <a href="/" className="brand-logo">Logo</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
          </nav>
                
         );
    }
}
 
export default Navbar;