import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./Footer.css";
export const Footer = () => {
  return (
    <footer className="footer-main">
      <h3 className="derechos">Tomi204© 2022</h3>
      <div className="footer-container">
        <a href="https://twitter.com/tomiioliver">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/tomi204_/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/tomi204/">
          <FaLinkedin />
        </a>

        <a href="https://github.com/tomi204">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};
