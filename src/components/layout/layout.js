import PropTypes from "prop-types";
import React from "react";
import Header from "../header/header";
import Social from "../social";
import "./layout.scss";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="outer-padding">
                <main>{children}</main>
            </div>
            <footer>
                <Social />
                &copy; The Bad Barnacles. All rights reserved.
            </footer>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
