import "./Navbar.css";
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click); 

const handleLinkClick = () => {
  this.setState({ isOpen: false });
 };


  return (
    <div className="header">
    
    
<Link to="/">
    <h1>Portfolio</h1>
</Link>

<ul className={click ? "nav-menu active" : "nav-menu"} >
    <li>
    <Link  to="/" onClick={handleLinkClick}>Home</Link> 

    </li>
    <li>
    <Link  to="/project" onClick={handleLinkClick}>Project</Link>
    </li>
    <li>
    <Link  to="/about" onClick={handleLinkClick}>About</Link>
    </li>
    <li>
    <Link  to="/contact" onClick={handleLinkClick}>Contact</Link>
    </li>
</ul>

<div className="hamburger" onClick={handleClick} >
{click ? (<CloseIcon size={20} style={{color: "#fff"}}/>) : (<MenuIcon size={20} style={{color: "#fff"}}/>
)}

</div>

    </div>
  )
}

export default Navbar