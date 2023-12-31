import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './Footer.css'

function Footer() {

    return(
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the TRNRS Newsletter to receive our best footwear deals
                </p>
                <p className="footer-subscription-text">
                    Unsubscribe whenever you want
                </p>
                <div className="input-areas">
                    <form>
                        <input type='email' name='email' placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2> About Us</h2>
                        <Link to='/sign-up'>How It Works</Link>
                        <Link to='/'>Reviewss</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Coming Soon</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Product Returns</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2> Videos</h2>
                        <Link to='/'>Submit Sneakers</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencers</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            TRNRS <i className="fa-solid fa-bolt"></i>
                        </Link>
                    </div>
                    <small className="website-rights">TRNRS 2023</small>
                    <div className="social-icons">
                        <Link className="social-icon-link"
                        to="/"
                        target='_blank'
                        aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link"
                        to="/"
                        target='_blank'
                        aria-label="Youtube">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link"
                        to="/"
                        target='_blank'
                        aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link"
                        to="/"
                        target='_blank'
                        aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link"
                        to="/"
                        target='_blank'
                        aria-label="Twitch">
                            <i className="fab fa-twitch"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Footer;