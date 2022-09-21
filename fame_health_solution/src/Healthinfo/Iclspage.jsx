import React from "react";

const Iclspage = () => {
  const iclsstyle = {
    border: "2px solid #000",
    width: "55%",
    margin: "auto",
    marginBottom: "15px",
    backgroundColor: "#fff",
  };
  return (
    <div id="iclsread" style={iclsstyle}>
      <div style={{ backgroundColor: "#020b11" }}>
        <h3 className="divheading">Individual Community Living Support</h3>
      </div>
      <div className="homemaker101">
        <div>
          <img
            src={"/Images/lighton.jpg"}
            style={{ maxHeight: "400px", maxWidth: "400px" }}
            alt="outdoor"
          />
        </div>
        <div>
          <p className="divparagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua. Platea dictumst
            vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Et
            pharetra pharetra massa massa ultricies mi quis hendrerit dolor.
            Faucibus vitae aliquet nec ullamcorper. Diam volutpat commodo sed
            egestas egestas. Duis convallis convallis tellus id interdum.
            Tincidunt vitae semper quis lectus nulla. Vitae congue mauris
            rhoncus aenean vel elit scelerisque. Odio aenean sed adipiscing diam
            donec adipiscing tristique risus. Id aliquet lectus proin nibh nisl
            condimentum id venenatis a. Lorem ipsum dolor sit amet. Interdum
            velit laoreet id donec ultrices. Imperdiet nulla malesuada
            pellentesque elit eget gravida cum sociis. Sagittis purus sit amet
            volutpat consequat mauris. Cras fermentum odio eu feugiat pretium.
            Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Eget
            mauris pharetra et ultrices neque ornare aenean. Bibendum neque
            egestas congue quisque egestas diam in. At elementum eu facilisis
            sed odio. Praesent tristique magna sit amet purus home
          </p>
        </div>
      </div>
    </div>
  );
};

export default Iclspage;
