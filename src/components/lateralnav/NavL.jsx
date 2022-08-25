import React from "react";
import "./NavL.css";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { getAll } from "../Api/api";

function NavL() {
  return (
    <ul className="navl">
      <li className="li-n">
        <a href="">
          <FaInstagram></FaInstagram>
        </a>
        <a >
          <FaTwitter></FaTwitter>
        </a>
      </li>
    </ul>
  );
}
export default NavL;
