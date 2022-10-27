import { Link } from "gatsby";
import React from "react";
import { SecondaryFeature } from "../components/feature/feature";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

import Press1 from "../images/press-1.jpg";
import Press2 from "../images/press-2.jpg";
import Press3 from "../images/press-3.jpg";

const SecondPage = () => (
    <Layout>
        <SEO title="Press Kit" />
        <SecondaryFeature />

        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-7">
                    <div className="section">
                        <h2>Bio</h2>
                        <p>
                            The Bad Barnacles are not a cult.
                            <br />
                            The Bad Barnacles are not a cult.
                            <br />
                            The Bad Barnacles are not a cult.
                        </p>
                        <p>
                            The Bad Barnacles are a four piece group from Sacramento, who practice a unique form of
                            Crooning Psychedelic-Garage-Surf. They are not a drug crazed hippie sex cult.
                        </p>
                        <p>
                            Winners of Sacramento News and Review’s 2020 Sammie Awards for Best Live Performer and Best
                            Independent Band.
                        </p>
                    </div>
                    <div className="section">
                        <h2>Listen</h2>
                        <iframe
                            title="Spotify player"
                            src="https://open.spotify.com/embed/album/2Ocpo3HvoIcwoxgkKbi4Oc"
                            width="100%"
                            height="380"
                            frameborder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                        ></iframe>
                    </div>
                    <div className="section">
                        <h2>Press</h2>
                        <div style={{ paddingRight: 60 }}>
                            <p>
                                <Link
                                    href="https://www.capradio.org/music/eclectic/2020/05/28/distant-desk-dispatch-our-favorite-tiny-desk-entries-of-2020/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    Distant Desk Dispatch: Our Favorite Tiny Desk Entries Of 2020
                                </Link>{" "}
                                (CapRadio)
                            </p>
                            <p>
                                <Link
                                    href="https://www.sactownsfinest.net/post/the-bad-barnacles"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    SacTown Barnacles
                                </Link>{" "}
                                (SacTown's Finest)
                            </p>
                        </div>
                    </div>
                    <div className="section">
                        <h2>Contact For Booking:</h2>
                        <p>
                            <a href="mailto:thebadbarnacles@gmail.com">thebadbarnacles@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className="section col-xs-12 col-sm-5 col-md-4 col-sm-push-1">
                    <h2>Photos</h2>

                    <Link href={Press1} target="_blank" rel="noopener">
                        <img src={Press1} alt="The Bad Barnacles members outside" />
                    </Link>
                    <Link href={Press2} target="_blank" rel="noopener">
                        <img src={Press2} alt="The Bad Barnacles members" />
                    </Link>
                    <Link href={Press3} target="_blank" rel="noopener">
                        <img src={Press3} alt="Live performance from The Bad Barnacles" />
                    </Link>
                </div>
            </div>
        </div>
    </Layout>
);

export default SecondPage;
