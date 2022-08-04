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
        <iframe
            title="Spotify player"
            src="https://open.spotify.com/embed/track/7mMzmzB7F9AjvF2t2Nc54u"
            width="100%"
            height="80"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
        />

        <div className="container" style={{ textAlign: "center" }}>
            <div className="section">
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
            </div>

            <div className="section">
                <h2>Upcoming Shows</h2>
                <Show
                    date="Aug 12th, 2022"
                    time="8PM"
                    bands="Swan Ronson, Country Risque, TX3"
                    venue="Russ Room"
                    address="730 K St, Sacramento, CA"
                />
                <Show
                    date="Oct 8th, 2022"
                    time="TBD"
                    venue="Harvest Fest at Sac Food Co-Op"
                    address="2820 R St, Sacramento, CA"
                />
                <Show
                    date="Oct 22nd, 2022"
                    time="5PM-9:30PM"
                    venue="Barnacle Bash #4 at Two Rivers Cider Co."
                    address="4311 Attawa Ave, Sacramento, CA"
                />
            </div>
        </div>
    </Layout>
);

export default IndexPage;
