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
      <AiOutlineTwitter style={{ color: "#1D9BF0", fontSize:'1.8em' }} />{" "}
      <AiOutlineFacebook style={{ color: "#4267B2", fontSize:'1.8em' }} />{" "}
      <FaPinterest style={{ color: "#E60023", fontSize:'1.8em'}} />{" "}
      <AiOutlineInstagram style={{ color: "#405DE6", fontSize:'1.8em' }} />
    </div>
  );
};

export default Footer;
