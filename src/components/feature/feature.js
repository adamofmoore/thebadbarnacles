import styled from "styled-components";
import Band1 from "./images/band-1.jpg";
import Cider from "./images/cider.jpg";

const BackgroundImage = styled.div`
    height: 600px;
`;

export const PrimaryFeature = styled(BackgroundImage)`
    background: url("${Band1}") top center no-repeat;
    background-size: cover;
`;

export const SecondaryFeature = styled(BackgroundImage)`
    background: url("${Cider}") top center no-repeat;
    background-size: cover;
`;
