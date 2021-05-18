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
                            Sacramento three-piece, The Bad Barnacles, are blazing a path of success. Recently awarded
                            by Sacramento News and Review as 2020’s Best Indie Band and Best Live Performer, the group
                            has received much praise and accolades. Founded in 2015, The Bad Barnacles began as a liquor
                            soaked house party band - and it wasn’t until 2020, with a heavy catalogue of original music
                            to share, that they decided to venture into the local music scene.
                        </p>
                        <p>
                            With their menacing surfabilly sound, these swashbuckling rockers were determined to
                            showcase their creations. Establishing the annual Barnacle Bash, a themed Halloween revelry,
                            empowered the band to organize local acts and creatives into a cohesive performance.
                        </p>
                        <p>
                            Led by singer-songwriter, Mateo L. Wappo, the band’s most recent releases are a swaying,
                            haunting and sometimes Spaghetti Western take on vintage gypsy rock. The Bad Barnacles are
                            produced by Birdworm Records.
                        </p>
                    </div>
                    <div className="section">
                        <h2>Listen</h2>
                        <iframe
                            src="https://open.spotify.com/embed/album/1bDE3hNH9MIjOWieIE6rra"
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
                        <p>1.707.365.1260</p>
                    </div>
                </div>
                <div className="section col-xs-12 col-sm-5 col-md-4 col-sm-push-1">
                    <h2>Photos</h2>

                    <Link href={Press1} target="_blank" rel="noopener">
                        <img src={Press1} />
                    </Link>
                    <Link href={Press2} target="_blank" rel="noopener">
                        <img src={Press2} />
                    </Link>
                    <Link href={Press3} target="_blank" rel="noopener">
                        <img src={Press3} />
                    </Link>
                </div>
            </div>
        </div>
    </Layout>
);

export default SecondPage;
