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
                    date="June 25, 2023"
                    time="8:00PM"
                    venue="Starlet Room"
                    address="2708 J St, Sacramento, CA"
                    bands="The Love Muscles"
                />
                <Show
                    date="July 21, 2023"
                    time="8:00PM"
                    venue="Brentwood Emporium"
                    address="561 1st St. Brentwood, CA"
                />
                <Show
                    date="August 11, 2023"
                    venue="Bike Dog Brewing"
                    time="5:30PM"
                    address="2568 Industrial Blvd #110, West Sacramento, CA"
                />
                <Show date="Sept 10, 2023" venue="Saturn Bar NOLA" address="3067 St Claude Ave, New Orleans, LA" />
            </div>
        </div>
    </Layout>
);

export default IndexPage;
