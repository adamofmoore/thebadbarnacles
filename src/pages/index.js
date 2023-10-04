import React from "react";
import { PrimaryFeature } from "../components/feature/feature";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Show from "../components/show";
import YouTubePlayer from "../components/youtube-player";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <PrimaryFeature />
        <div className="container section text--center">
            <h2>Latest Single</h2>
            <iframe
                title="spotify-embed"
                src="https://open.spotify.com/embed/track/4rMID8yQbdqYmsQCPIAlZm?utm_source=generator"
                width="100%"
                height="152"
                allowFullScreen
                allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </div>
        <div className="container section text--center">
            <h2>Videos</h2>
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    <YouTubePlayer video="or6IluH0sGM" />
                    <br />
                </div>
                <div className="col-xs-12 col-sm-6">
                    <YouTubePlayer video="OnwBJ2ux2i0" />
                </div>
            </div>

            <div className="section">
                <h2>Upcoming Shows</h2>
                <Show
                    date="October 7, 2023"
                    time="5:15PM"
                    showTitle="Colonial Heights Porchfest"
                    venue="Colonial Park"
                    address="19th Ave, Sacramento, CA (Porch #3)"
                    moreInfo="https://www.eventbrite.com/e/2023-colonial-heights-porchfest-tickets-674374230477#:~:text=The%202023%20Colonial%20Heights%20Porchfest,Ave%2C%20Sacramento%2C%20CA%2095820"
                />
                <Show
                    date="October 13, 2023"
                    time="7:30PM"
                    showTitle="Spinal Sac: A Spinal Tap Tribute Night"
                    venue="Starlet Room"
                    address="2708 J St, Sacramento, CA"
                    tickets="https://www.harlows.com/event/spinal-sac-a-spinal-tap-tribute-night/the-starlet-room/-sacramento-california/"
                />
            </div>
        </div>
    </Layout>
);

export default IndexPage;
