import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Header from "../header/header";
import Social from "../social";

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <main>{children}</main>
            <Footer>
                <Social />
                &copy; The Bad Barnacles. All rights reserved.
            </Footer>
        </Wrapper>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

const Wrapper = styled.div`
    max-width: 1800px;
    margin: auto;
`;

const Footer = styled.footer`
    padding: 20px;
    margin-top: 20px;
    text-align: center;
    font-size: 1.2rem;
`;

export default Layout;
