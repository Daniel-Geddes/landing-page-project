import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                Recieve our newsletter. Sign up now!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>SUBSCRIBE</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>ABOUT US</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>CONTACT</h2>
                        <Link to="/sign-up">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Images</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>VIDEOS</h2>
                        <Link to="/sign-up">Submit Video</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>SOCIALS</h2>
                        <Link to="/sign-up">Facebook</Link>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Twitter</Link>
                        <Link to="/">Youtube</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">PICS <i class="far fa-images"/></Link>
                    </div>
                    <small className="website-rights">PICS © 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to="/" target="_blank"
                        aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                        to="/" target="_blank"
                        aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link youtube"
                        to="/" target="_blank"
                        aria-label="Youtube">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                        to="/" target="_blank"
                        aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                        to="/" target="_blank"
                        aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer
