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
                    date="July 20, 2024"
                    time="4:30PM"
                    showTitle="Alpine Block Party"
                    venue="Stonum Vineyards"
                    address="16388 Alpine Rd, Lodi, CA"
                    tickets="https://stonumvineyards.ticketsauce.com/e/alpine-block-party-2024"
                />
                 <Show
                    date="August 30, 2024"
                    time="TBD"
                    showTitle="Old Ironsides"
                    venue="Old Ironsides"
                    address="1901 10th St, Sacramento, CA"
                />
                 <Show
                    date="September 6, 2024"
                    time="TBD"
                    showTitle="Carrollton Station"
                    venue="Carrollton Station NOLA"
                    address="8140 Willow St, New Orleans, LA"
                    moreInfo="https://www.carrolltonstationnola.com"
                />
                <Show
                    date="September 21, 2024"
                    time="4:00PM"
                    showTitle="Bike Dog"
                    venue="Bike Dog East Sac"
                    address="1210 66th St, Sacramento, CA"
                />
                <Show
                    date="November 2, 2024"
                    time="TBD"
                    showTitle="Barnacle Bash 5"
                    venue="Old Ironsides"
                    address="1901 10th St, Sacramento, CA"
            </div>
        </div>
    </Layout>
);

export default IndexPage;
