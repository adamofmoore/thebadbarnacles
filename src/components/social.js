import { faApple, faBandcamp, faFacebook, faInstagram, faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const Social = () => (
    <SocialLinks>
        <Link href="https://www.facebook.com/thebadbarnacles/" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link href="https://www.instagram.com/thebadbarnacles/" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href="https://www.youtube.com/channel/UCFufGoW-kFoIgCQQIb2G-BQ" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faYoutube} />
        </Link>
        <Link href="https://open.spotify.com/artist/2gsdlP9yIcxbHOd4tt88yP" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faSpotify} />
        </Link>
        <Link href="https://music.apple.com/us/artist/the-bad-barnacles/1458064632" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faApple} />
        </Link>
        <Link href="https://thebadbarnacles.bandcamp.com/" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faBandcamp} />
        </Link>
    </SocialLinks>
);

export default Social;

const SocialLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 3rem;

    a {
        margin: 8px;
        padding: 12px;

        &:hover {
            transform: scale(1.2);
        }
    }
`;
