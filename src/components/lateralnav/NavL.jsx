import React from "react";
import "./NavL.css";

import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

function NavL() {
  return (
    <ul className="navl">
      <li className="li-n">
        <a href="">
          <FaInstagram></FaInstagram>
        </a>
        <a href="">
          <FaTwitter></FaTwitter>
        </a>
      </li>
    </ul>
  );
}
export default NavL;
