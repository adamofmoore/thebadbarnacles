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
                src="https://open.spotify.com/embed/track/176TyG0Fo5W2YdHlCUBVC7"
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
                    date="April 27, 2025"
                    time="7:00PM"
                    showTitle="Soft Palms Tour"
                    venue="Old Ironsides"
                    address="1901 10th St, Sacramento, CA"
                 />
                <Show
                    date="June 14, 2025"
                    time="TBD"
                    showTitle="90s Show"
                    venue="Torch Club"
                    address="904 15th St, Sacramento, CA"       
                />
                <Show
                    date="June 28, 2025"
                    time="8:00PM"
                    showTitle="Cafe Colonial"
                    venue="Cafe Colonial"
                    address="3520 Stockton Blvd, Sacramento, CA"
                />
                <Show
                    date="September 13, 2025"
                    time="6:00PM"
                    showTitle="Second Saturday Concert"
                    venue="Sac Bike Kitchen"
                    address="1915 I St, Sacramento, CA"
                 />
                <Show
                    date="November 1, 2025"
                    time="TBD"
                    showTitle="Barnacle Bash"
                    venue="Press Club"
                    address="1119 21st Street, Sacramento, CA"       
                />
            </div>
        </div>
    </Layout>
);

export default IndexPage;
