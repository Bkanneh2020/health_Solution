import React from "react";

const Founders = () => {
  const pstyle = {
    padding: "15px",
    backgroundColor:'#FBF2CF',
    textIndent: "50px",
    letterSpacing: "2px"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor
            <br />
            urna nunc id cursus metus aliquam eleifend mi. Et tortor at risus
            <br />
            viverra adipiscing at in. Dui faucibus in ornare quam viverra orci
            <br />
            sagittis eu volutpat. Tincidunt eget nullam non nisi est sit amet.
            <br />
            Libero enim sed faucibus turpis in eu mi bibendum neque.Iaculis at
            <br />
            erat pellentesque adipiscing. Interdum varius sit amet mattis.
            <br />
            Tortor posuere ac ut consequat semper viverra nam. Maecenas sed enim
            <br />
            ut sem viverra aliquet eget sit amet. Etiam sit amet nisl purus in
            <br />
            mollis nunc sed id. Nam libero justo laoreet sit amet cursus sit
            <br />
            amet dictum. In metus vulputate eu scelerisque felis imperdiet
            <br />
            proin. Nunc sed id semper risus in hendrerit gravida rutrum. Integer
            <br />
            feugiat scelerisque varius morbi. Orci phasellus egestas tellus
            <br />
            rutrum tellus pellentesque eu tincidunt. Leo in vitae turpis massa
            <br />
            sed elementum.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor
              <br />
              urna nunc id cursus metus aliquam eleifend mi. Et tortor at risus
              <br />
              viverra adipiscing at in. Dui faucibus in ornare quam viverra orci
              <br />
              sagittis eu volutpat. Tincidunt eget nullam non nisi est sit amet.
              <br />
              Libero enim sed faucibus turpis in eu mi bibendum neque.Iaculis at
              <br />
              erat pellentesque adipiscing. Interdum varius sit amet mattis.
              <br />
              Tortor posuere ac ut consequat semper viverra nam. Maecenas sed
              enim
              <br />
              ut sem viverra aliquet eget sit amet. Etiam sit amet nisl purus in
              <br />
              mollis nunc sed id. Nam libero justo laoreet sit amet cursus sit
              <br />
              amet dictum. In metus vulputate eu scelerisque felis imperdiet
              <br />
              proin. Nunc sed id semper risus in hendrerit gravida rutrum.
              Integer
              <br />
              feugiat scelerisque varius morbi. Orci phasellus egestas tellus
              <br />
              rutrum tellus pellentesque eu tincidunt. Leo in vitae turpis massa
              <br />
              sed elementum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
