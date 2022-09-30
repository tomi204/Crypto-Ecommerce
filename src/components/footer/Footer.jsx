import React from "react";
import { FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
export const Footer = () => {
  return (
    <footer>
      <h3>Tomi204© 2022</h3>
      <div className="footer-container">
        <a href="">
          <FaTwitter />
        </a>
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaLinkedin />
        </a>

        <a href="">
          <FaTelegram />
        </a>
      </div>
    </footer>
  );
};
