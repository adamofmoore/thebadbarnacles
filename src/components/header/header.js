import { Link } from "gatsby";
import React from "react";
import "./header.scss";

const Header = () => (
    <header>
        <h1 className="header-title">
            <Link to="/">The Bad Barnacles</Link>
        </h1>
        <div className="header-nav-links">
            <Link to="/press-kit">Press Kit</Link>
        </div>
    </header>
);

export default Header;
