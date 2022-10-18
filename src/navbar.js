import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
           <h1>The Cadache Blog</h1>
           <div className="links">
               <Link to="/home" style={{  
                   clr: "#1e9bff",
                   color: "white",
                   backgroundColor: '#f1356d',
                   borderRadius: '3px'
               }}><span>Home</span><i></i></Link>

               <Link to="/Create" style={ { 
                       color: "white",
                       backgroundColor: '#f1356d',
                       borderRadius: '3px'
               } }><span>New Blog</span><i></i></Link>
           </div>
        </nav>
    );
}
 
export default Navbar;