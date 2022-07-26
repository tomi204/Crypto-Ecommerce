import React from "react";
import "./NavL.css";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function NavL() {
  return (
    <ul className="navl">
      <li className="li-n">
        <a href="https://twitter.com/tomiioliver">
          <FaTwitter></FaTwitter>
        </a>
        <a href="">
          <FaTiktok></FaTiktok>
        </a>
        <a href="">
          <FaInstagram></FaInstagram>
        </a>
        <a href="">
          <FaFacebook></FaFacebook>
        </a>
      </li>
    </ul>
  );
}
export default NavL;
