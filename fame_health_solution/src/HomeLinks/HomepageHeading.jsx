import React from "react";
import { AiOutlineWechat } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { BsCardText, BsPeopleFill } from "react-icons/bs";

const HomepageHeading = () => {
const headingbg ={
  backgroundImage:"url(/Images/headingbg.jpg)",
  backgroundSize:'cover',
  backgroundPosition:'center',
  backgroundAttachment: 'fixed',
  padding:'130px'
}

  return (
    <div className="homepageheading" style={headingbg}>
      <div style={{ border: "2px solid gray" }}>
        <CgFileDocument  style={{fontSize:'2rem'}} />
        <p>About us</p>
      </div>
      <div style={{ border: "2px solid gray" }}>
        <AiOutlineWechat style={{fontSize:'2rem'}} />
        <p>Chat with us</p>
      </div>
      <div style={{ border: "2px solid gray" }}>
        <BsCardText style={{fontSize:'2rem'}}  />
        <p>Mission Statment</p>
      </div>
      <div style={{ border: "2px solid gray" }}>
        <BsPeopleFill style={{fontSize:'2rem'}}  />
        <p>Founders</p>
      </div>
    </div>
  );
};

export default HomepageHeading;
