import React from "react";
import styled from "styled-components";

function YouTubePlayer(props: { video: string; autoplay?: boolean }) {
    const autoplay = props.autoplay ? "?autoplay=1" : "?autoplay=0";
    const src = "https://www.youtube.com/embed/" + props.video + "?rel=0&amp;showinfo=0;" + autoplay;

    return (
        <EmbedContainer>
            <iframe src={src} frameBorder="0" allowFullScreen />
        </EmbedContainer>
    );
}
export default YouTubePlayer;

const EmbedContainer = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;

    iframe,
    object,
    embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;
