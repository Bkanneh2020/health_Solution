import React from "react";
import { AiOutlineWechat } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { BsCardText, BsPeopleFill } from "react-icons/bs";

const HomepageHeading = () => {
  const headingbg = {
    backgroundImage: "url(/Images/headingbg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    paddingBottom: "20%",
  };

  return (
    <div className="homepageheading" style={headingbg}>
      <div>
        <button className="headingbtnn" 
          style={{
            margin: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
            borderRadius: "10px",
            backgroundColor:'#ffff'
          }}
        >
          <CgFileDocument style={{ fontSize: "2rem" }} />
          <span style={{ display: "block" }}>About us</span>
        </button>
        <button className="headingbtnn"
          style={{
            margin: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
            borderRadius: "10px",
            backgroundColor:'#ffff'
          }}
        >
          <AiOutlineWechat style={{ fontSize: "2rem" }} />
          <span style={{ display: "block" }}>Chat with us</span>
        </button>
      </div>
      <div className="headingbtn">
        <button className="headingbtnn"
          style={{
            margin: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
            borderRadius: "10px",
            backgroundColor:'#ffff',
          }}
        >
          <BsCardText style={{ fontSize: "2rem" }} />
          <span style={{ display: "block" }}>Mission Statment</span>
        </button>
        <button className="headingbtnn"
          style={{
            margin: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
            borderRadius: "10px",
            backgroundColor:'#ffff'
          }}
        >
          <BsPeopleFill style={{ fontSize: "2rem" }} />
          <span style={{ display: "block" }}>Founders</span>
        </button>
      </div>
    </div>
  );
};

export default HomepageHeading;
