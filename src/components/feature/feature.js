import styled from "styled-components";
import Band1 from "./images/band-1.jpg";
import Band2 from "./images/band-2.jpg";

const BackgroundImage = styled.div`
    height: 200px;

    @media screen and (min-width: 600px) {
        height: 400px;
    }

    @media screen and (min-width: 768px) {
        height: 600px;
    }
`;

export const PrimaryFeature = styled(BackgroundImage)`
    background: url("${Band1}") top center no-repeat;
    background-size: cover;
`;

export const SecondaryFeature = styled(BackgroundImage)`
    background: url("${Band2}") top center no-repeat;
    background-size: cover;
`;
