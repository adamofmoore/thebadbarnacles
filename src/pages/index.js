import React from "react";
import { PrimaryFeature } from "../components/feature/feature";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import YouTubePlayer from "../components/youtube-player";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <PrimaryFeature />
        <div className="container section text--center">
            {/* <iframe
                title="Spotify player"
                src="https://open.spotify.com/embed/track/4rMID8yQbdqYmsQCPIAlZm"
                width="100%"
                height="80"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
            /> */}
            <h2>Latest Single</h2>
            <iframe
                // style="border-radius:12px"
                src="https://open.spotify.com/embed/track/4rMID8yQbdqYmsQCPIAlZm?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allowfullscreen=""
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

            {/* <div className="section">
                <h2>Upcoming Shows</h2>
                <Show date="Oct 1st, 2022" time="7:00PM (FREE)" address="H and 21st St, Sacramento, CA" />
                <Show
                    date="Oct 22nd, 2022"
                    time="6:30PM-MIDNIGHT"
                    venue="Barnacle Bash #4 at Russ Room"
                    address="730 K St, Sacramento, CA"
                    tickets="https://www.exploretock.com/therussroom/event/365935"
                />
            </div> */}
        </div>
    </Layout>
);

export default IndexPage;
