import "../styles/Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
            <ul>
                <Link className="listItem" to="/">Home</Link>
                <Link className="listItem" to="/page1">Page 1</Link>
                <Link className="listItem" to="/page2">Page 2</Link>
                <Link className="listItem" to="/page3">Page 3</Link>
                <Link className="listItem" to="/page4">Page 4</Link>
            </ul>
        </div>
     );
}
 
export default Navbar;