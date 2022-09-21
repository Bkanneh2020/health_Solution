import React from "react";

const HomeMaker = () => {
  const homestyle = {
    border: "2px solid #000",
    width: "55%",
    margin: "auto",
    marginBottom: "15px",
    marginTop: "25px",
    backgroundColor: "#fff",
  };
  return (
    <div id="Homeread" style={homestyle}>
      <div style={{backgroundColor:'#020b11'}}>
        <h3 className="divheading">Home Maker</h3>
      </div>
      <div className="homemaker101">
        <div>
          <img
            src={"/Images/cooking.jpg"}
            style={{ maxHeight: "400px", maxWidth: "400px" }} alt='outdoor'
          />
        </div>
        <div>
          <p className="divparagraph">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea
            dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim. Et pharetra pharetra massa massa ultricies mi quis
            hendrerit dolor. Faucibus vitae aliquet nec ullamcorper. Diam
            volutpat commodo sed egestas egestas. Duis convallis convallis
            tellus id interdum. Tincidunt vitae semper quis lectus nulla. Vitae
            congue mauris rhoncus aenean vel elit scelerisque. Odio aenean sed
            adipiscing diam donec adipiscing tristique risus. Id aliquet lectus
            proin nibh nisl condimentum id
            hendrerit dolor. Faucibus vitae aliquet nec ullamcorper. Diam
            volutpat commodo sed egestas egestas. Duis convallis convallis
            tellus id interdum. Tincidunt vitae semper quis lectus nulla. Vitae
            congue mauris rhoncus aenean vel elit scelerisque. Odio aenean sed
            adipiscing diam donec adipiscing tristique risus. Id aliquet lectus
            proin nibh nisl condimentum id
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeMaker;
