/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

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
            <Social />
            <footer>&copy; The Bad Barnacles. All rights reserved.</footer>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
