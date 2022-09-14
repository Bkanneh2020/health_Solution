import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  const thisYear = new Date();
  const year = thisYear.getFullYear();

  const FooterStyle = {
    textAlign: "center",
    position: "fixed",
    backgroundColor: "#4b4846",
  };

  return (
    <div style={FooterStyle} className="footerstyle">
      <p> &copy;{year} </p>
      <AiOutlineTwitter style={{ color: "#1D9BF0" }} />{" "}
      <AiOutlineFacebook style={{ color: "#4267B2" }} />{" "}
      <FaPinterest style={{ color: "#E60023" }} />{" "}
      <AiOutlineInstagram style={{ color: "#405DE6" }} />
    </div>
  );
};

export default Footer;
