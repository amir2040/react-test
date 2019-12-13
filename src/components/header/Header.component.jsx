import React from 'react'
import {Link} from 'react-router-dom';
const Header = () => {
    return ( 
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link className='nav-link' to='/'>
            Add Info
        </Link>
      </li>

      <li className="nav-item">
         <Link className='nav-link' to='/results'>
            Results
        </Link>
      </li>
      
    </ul>
  </div>
</nav>
     );
}
 
export default Header;