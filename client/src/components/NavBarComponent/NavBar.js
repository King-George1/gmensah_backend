import React from 'react';
import './NavBarStyle.css';
import { Link } from 'react-router-dom';

export const NavBar = (props) => {
    console.log(props.authenticated)
    return(
        <nav>
                <Link to="/"><div id="logo">AmaliForum</div></Link>
                <Link to="/"><div>Home</div></Link>

                {props.authenticated && <Link to="/askQuestion"><div>Ask Question</div></Link>}
                <Link to="/about"><div>Sign In</div></Link>
                <Link to="/shop"><div>Register</div></Link>
                   
        </nav>
    )
}