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

            <div className="section">
                <h2>Upcoming Shows</h2>
                <Show
                    date="May 19th, 2022"
                    time="8PM"
                    bands="SumBum, DJ JonVonRonk"
                    venue="Bottle and Barlow"
                    address="1120 R St, Sacramento, CA 95811"
                />
                <Show
                    date="May 21st, 2022"
                    venue="River Ranch Music Festival Spring 2022"
                    address="20900 Fish Hatchery Road, Tuolumne, CA 95379"
                    tickets="https://riverranchmusicfestival.square.site/product/riverranchmusicfestival/5"
                />
                <Show
                    date="October 8th, 2022"
                    venue="Sac Co-Op Harvest Festival"
                    address="2820 R St, Sacramento, CA 95816"
                />
            </div>
        </div>
    </Layout>
);

export default IndexPage;
