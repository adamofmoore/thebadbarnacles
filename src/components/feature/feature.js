import { styled, css } from "styled-components";
import Band1 from "./images/band-1-nola.jpg";
import Band2 from "./images/band-2-nola.jpg";

const BackgroundImage = styled.div`
    height: 200px;

    @media screen and (min-width: 600px) {
        height: 400px;
    }

    @media screen and (min-width: 768px) {
        height: 600px;
    }
`;

const inset = css`
    @media screen and (min-width: 768px) {
        margin: 0 32px;
        border-radius: 8px;
    }
`;

export const PrimaryFeature = styled(BackgroundImage)`
    background: url("${Band1}") center center no-repeat;
    background-size: cover;
    ${inset}
`;

export const SecondaryFeature = styled(BackgroundImage)`
    background: url("${Band2}") center center no-repeat;
    background-size: cover;
    ${inset}
`;
