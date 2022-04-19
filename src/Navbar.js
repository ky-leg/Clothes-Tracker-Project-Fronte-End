import React from "react";
import { NavLink } from "react-router-dom"

function Navbar(){
    return (
        <nav className="ui secondary pointing menu">
            <NavLink className="item" to="/Home">Home</NavLink>
            <NavLink className="item" to="/Team">Team</NavLink>
            <NavLink className="item" to="/NewPlayer">Add Players</NavLink>
        </nav>       
    );
}

export default Navbar