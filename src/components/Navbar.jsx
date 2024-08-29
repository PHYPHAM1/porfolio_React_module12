import { Link } from 'react-router-dom';  //...importing Link from react-router-dom
import '../styles/Navbar.css';  //...just for css for pathing..


// In Navbar, we can assign a style from an object by using curly braces
//using Link instead of a tag, 
function Navbar() {
  return (
    <div className="header">
      <h1>PHY PHAM</h1>

    <nav className="navbar">
      <Link to="/">AboutMe

      </Link>


      <Link to="/portfolio">Portfolilo

      </Link>


      <Link to="/contact">Contact

      </Link>


      <Link to="/resume">Resume
      
      </Link>
      
    </nav>
    </div>
  );
}

export default Navbar;
