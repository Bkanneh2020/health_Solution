import React from "react";

const AboutUs = () => {
  const pstyle = {
    textIndent: "50px",
    letterSpacing: "2.5px",
    padding: "25px",
    backgroundColor:'#FBF2CF',
    fontFamily: 'Georgia, Times New Roman, Times, serif', 
    lineHeight:'26px'
  };
  const h4style = {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#000",
    fontSize: "1.6rem",
  };
  return (
    <div style={{backgroundColor:'#fff'}}>
      <div>
        <h4 style={h4style}>About Us</h4>
      </div>
      <div style={{  display: "flex",
        alignItems: "center",
        justifyContent: "center"}}>
        <p style={pstyle}>
        A little explaination regarding this work. Lorem ipsum dolor sit amet,
          consectetur <br />
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua for. <br />
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
          dignissim. always <br />
          Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor.
          Faucibus vitae foral<br /> aliquet nec ullamcorper. Diam volutpat commodo
          sed egestas remember to sleep and eat <br />
          Duis convallis convallis tellus id egestas. Life is good on this side, so living like always

          <p style={pstyle}>
          A little explaination regarding this work. Lorem ipsum dolor sit amet,
          consectetur <br />
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua for. <br />
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
          dignissim. always <br />
          Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor.
          Faucibus vitae foral<br /> aliquet nec ullamcorper. Diam volutpat commodo
          sed egestas remember to sleep and eat <br />
          Duis convallis convallis tellus id egestas. Life is good on this side, so living like always
          </p>
         
        </p>
      </div>
    </div>
  );
};
export default AboutUs;
