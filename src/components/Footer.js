import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.png";
import whatsapp from "../img/social/whatsapp.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
// import twitter from "../img/social/twitter.svg";
// import vimeo from "../img/social/vimeo.svg";

const Footer = () => {
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered">
        <img src={logo} alt="Kaldi" style={{ width: "14em" }} />
      </div>
      <a className="float" target="_blank" href="https://api.whatsapp.com/send?phone=919778172229&text=Hi%20Leena%60s%20Mushroom.%20I%20would%20like%20to%20contact%20you%20">
        <img className="whatsapp" src={whatsapp} alt="Whatsapp"/>
      </a>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62893.76498610667!2d76.46711629861375!3d9.862084744057974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d9853ee36a29%3A0x21d45727fa3f7c07!2sLEENA'S%20MUSHROOM%20FARMS%20LLP!5e0!3m2!1sen!2sin!4v1650991266805!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/products">
                      Products
                    </Link>
                  </li>
                  <li>
                    <a
                      className="navbar-item"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4 social">
              <a
                title="facebook"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/LeenasMushroom"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                />
              </a>
              <a
                title="instagram"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/leenasmushroom"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                />
              </a>
            </div>
            <div className="column is-4">
              <ul className="menu-list">
                <li>
                  <Link to="/terms-and-conditions" className="navbar-item">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/contactus">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/shipping-and-delivery">
                    Shipping & Delivery Policy
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/cancellation-and-refund">
                    Cancellation & Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
