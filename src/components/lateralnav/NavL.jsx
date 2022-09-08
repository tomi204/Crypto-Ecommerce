import React from "react";
import "./NavL.css";
import { FaInstagram, FaTiktok, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { getAll } from "../Api/api";

function NavL() {
  return (
    <ul className="navl">
      <li className="li-n">
        <a href="https://www.instagram.com/tomi204_/">
          <FaInstagram></FaInstagram>
        </a>
        <a href="https://twitter.com/tomiioliver">
          <FaTwitter></FaTwitter>
        </a>
        <a href="https://www.linkedin.com/in/tomi204/">
          <FaLinkedin></FaLinkedin>
        </a>
        <a href="">
          <FaGithub />
        </a>
      </li>
    </ul>
  );
}
export default NavL;
