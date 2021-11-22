import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Header = () => {
    return (
        <header className="App-header">
            <h1>User CRUD</h1>
            <hr/>
            <div className="links">
                <NavLink to="/" activeClassName="active-menu" exact>Users List</NavLink>
                <NavLink to="/add" activeClassName="active-menu">Add User</NavLink>
            </div>
        </header>
    )
}

export default Header;
