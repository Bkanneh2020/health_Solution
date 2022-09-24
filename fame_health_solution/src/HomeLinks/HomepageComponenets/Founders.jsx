import React from "react";

const Founders = () => {
  const pstyle = {
    padding: "15px",
    backgroundColor:'#FBF2CF',
    textIndent: "50px",
    letterSpacing: "2px",
    fontFamily: 'inherit',
    lineHeight:'25px'
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
        <h4 className="" style={h4style}>
          Founders
        </h4>
      </div>
      <div style={{display:'flex',  alignItems: "center",
        justifyContent: "center"}}>
        <div className="firstfounder">
          <div>
            <img
              src={"/Images/founder.jpg"}
              style={{
                maxHeight: "200px",
                maxWidth: "200px",
                borderRadius: "50%",
              }}
              alt="outdoor"
            />
          </div>
        <div>
          <p style={pstyle} className="">
          A little explaination regarding this work. Lorem ipsum dolor sit amet,
          <br />
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna. <br />
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
           always <br />
          Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor.
          Faucibus<br /> aliquet nec ullamcorper. Diam volutpat commodo
          sed egestas remember to <br />
          Duis convallis convallis tellus id egestas. Life is good on this side, so living like always
          </p>
          </div>
        </div>

        <div className="secondfounder">
          <div>
            <img
              src={"/Images/founder.jpg"}
              style={{
                maxHeight: "200px",
                maxWidth: "200px",
                borderRadius: "50%",
              }}
              alt="outdoor"
            />
          </div>
          <div>
            <p style={pstyle} className="">
            A little explaination regarding this work. Lorem ipsum dolor sit amet,
          <br />
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna. <br />
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
           always <br />
          Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor.
          Faucibus<br /> aliquet nec ullamcorper. Diam volutpat commodo
          sed egestas remember to<br />
          Duis convallis convallis tellus id egestas. Life is good on this side, so living like always
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
