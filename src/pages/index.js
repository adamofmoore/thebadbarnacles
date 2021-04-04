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
                <Show date="March 20th" time="2PM" address="Private Event" venue="Tahoe Park, Sacramento, CA" isPast />
                <Show
                    date="March 20th"
                    time="8PM"
                    bands="Sour Diesel"
                    venue="BBQ and Burgers"
                    address="2114 Sutterville Rd, Sacramento, CA"
                    isPast
                />
                <Show
                    date="May 1st"
                    time="5PM"
                    venue="New Glory Craft Brewery"
                    address="8251 Alpine Ave, Sacramento, CA"
                />
                <Show
                    date="May 15th"
                    time="5PM"
                    venue="Big Sexy Brewing Company"
                    address="85861 88th St #800, Sacramento, CA 95828"
                />
                <Show
                    date="May 29th"
                    time="6PM"
                    venue="Two Rivers Cider"
                    address="4311 Attawa Ave #300, Sacramento, CA 95822"
                />
            </div>
        </div>
    </Layout>
);

export default IndexPage;
