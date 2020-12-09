import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo />
        <SiteMap />
        <ChatInvite />
        <Social />
      </div>
    </footer>
  );
}

function SiteMap() {
  return (
    <div className="footer__sitemap">
      <section>
        <h6>Shop</h6>
        <ul>
          <li><a href="/keyboards">Keyboards</a></li>
          <li><a href="/keycaps">Keycaps</a></li>
          <li><a href="/cables">Cables</a></li>
          <li><a href="/desk-mats">Desk Mats</a></li>
          <li><a href="/mouse-pads">Mouse Pads</a></li>
        </ul>
      </section>
      <section>
        <h6>About</h6>
        <ul>
          <li><a href="/about-us">Keycaps, Inc</a></li>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/account">Account</a></li>
        </ul>
      </section>
    </div>
  );
}

function ChatInvite() {
  return (
    <div className="footer__chat">
      <h6>Chat and discover</h6>
      <p>Engage with fans, voice your opinion on upcoming projects, and vote on new projects!</p>
      <button>Join Discord Channel</button>
    </div>
  );
}

function Social() {
  return (
    <div className="footer__social">
      <span className="social__copy">
        Copyright &#169; 2020 Keycaps, Inc.
      </span>
      <div className="social__wrapper">
        <a href="/facebook">
          <img
            src="./icon-facebook.svg"
            alt="facebook icon provided by Jemis Mali via Unicorns on Figma's Community" />
        </a>
        <a href="/instagram">
          <img
            src="./icon-instagram.svg"
            alt="instagram icon provided by Jemis Mali via Unicorns on Figma's Community" />
        </a>
        <a href="/twitter">
          <img
            src="./icon-twitter.svg"
            alt="twitter icon provided by Jemis Mali via Unicorns on Figma's Community" />
        </a>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="footer__logo">
      <img
        className="footer__logo__img"
        src="./logo.png"
        alt="Keycaps Inc logo featuring corporate colors in the form of boxes in the shape of the arrow keys on a keyboard" />
    </div>
  );
}

export default Footer;