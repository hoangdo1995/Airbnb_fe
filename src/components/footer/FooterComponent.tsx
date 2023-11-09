import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const FooterComponent = (props: Props) => {
  return <div className="footer container">
      <div className="link d-flex justify-content-between mb-5">
        <div className="link-item d-flex flex-column">
          <h3>Hổ trợ</h3>
          <Link to={''}>Help Center</Link>
          <Link to={''}>Get help with a safety issue</Link>
          <Link to={''}>AirCover</Link>
          <Link to={''}>Anti-discrimination</Link>
          <Link to={''}>Cancellation options</Link>
          <Link to={''}>Report neighborhood concern</Link>
        </div>
        <div className="link-item d-flex flex-column">
          <h3>Hosting</h3>
          <Link to={''}>Airbnb your house</Link>
          <Link to={''}>AirCover for hosts</Link>
          <Link to={''}>Hosting resources</Link>
          <Link to={''}>Community forum</Link>
          <Link to={''}>Hosting responsibly</Link>
          <Link to={''}>Airbnb-friendly apartment</Link>
        </div>
        <div className="link-item d-flex flex-column">
          <h3>Airbnb</h3>
          <Link to={''}>Newsroom</Link>
          <Link to={''}>New features</Link>
          <Link to={''}>Careers</Link>
          <Link to={''}>Investors</Link>
          <Link to={''}>Gift cards</Link>
          <Link to={''}>Airbnb.com emergency stays</Link>
        </div>
      </div>
      <div className="contact my-3 d-flex justify-content-between">
        <div className="contact-item">
          <Link to={''}><span>&copy;</span>2023 Airbnb, Inc</Link>
          <Link to={''} className="dot">Terms</Link>
          <Link to={''} className="dot">Sitemap</Link>
          <Link to={''} className="dot">Privacy</Link>
          <Link to={''} className="dot">Your Privacy Choices</Link>
        </div>
        <div className="contact-item">
          <Link to={''}><i className="fa fa-globe me-2"></i> English(US) $USD</Link>
          <Link to={''}><i className="fab fa-facebook-square"></i></Link>
          <Link to={''}><i className="fab fa-twitter-square"></i></Link>
          <Link to={''}><i className="fab fa-instagram"></i></Link>
        </div>
      </div>
  </div>;
};

export default FooterComponent;
