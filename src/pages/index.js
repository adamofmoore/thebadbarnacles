import React from "react";
import { PrimaryFeature } from "../components/feature/feature";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import YouTubePlayer from "../components/youtube-player";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <PrimaryFeature />

        <iframe
            src="https://open.spotify.com/embed/track/7mMzmzB7F9AjvF2t2Nc54u"
            width="100%"
            height="80"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
        ></iframe>

        <div className="container" style={{ textAlign: "center" }}>
            <div className="section">
                <h2>Videos</h2>
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <YouTubePlayer video="5nqkEJcRyqA" />
                        <br />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <YouTubePlayer video="qSC8Bg7srAs" />
                    </div>
                </div>
            </div>

            {/* <div className="section">
                <h2>Shows</h2>
                <p>You can add shows here once you have some.</p>
            </div> */}
        </div>
    </Layout>
);

export default IndexPage;
