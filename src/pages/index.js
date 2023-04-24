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
                    date="April 30, 2023"
                    time="6:00PM"
                    venue="Starlet Room"
                    address="2708 J St, Sacramento, CA"
                    tickets="https://www.etix.com/ticket/p/7516214/get-the-wall-ep-release-showwith-just-is-the-are-nots-and-the-bad-barnacles-sacramento-the-starlet-room?fbclid=PAAabDaLTL1JvJsjPX8K9nNSArHPtj4DNj1s1CSOvG3uh1FdNPDs7hh1NvIq4"
                    bands="Get the Wall, Just Is & The Are Nots"
                    price="$12 Pre / $15 Door"
                />
                <Show
                    date="May 13, 2023"
                    time="1:00PM—2:30PM"
                    venue="Sacramento Natural Foods Co-op"
                    address="2820 R St, Sacramento, CA"
                    price="FREE"
                />
                <Show
                    date="May 19, 2023"
                    time="7:00PM"
                    venue="Old Ironsides"
                    address="1901 10th St, Sacramento, CA"
                    tickets="https://wl.seetickets.us/event/Death-PartyAtTheBeach/544367?afflky=OldIronsides"
                    bands="Death Party At The Beach, Swan Ronson, The Dark Whatever"
                    price="$10 Pre / $15 Door"
                />
                <Show
                    date="June 25, 2023"
                    venue="Starlet Room"
                    address="2708 J St, Sacramento, CA"
                    bands="The Love Muscles"
                />
            </div>
        </div>
    </Layout>
);

export default IndexPage;
