import React from "react";

const Services = () => {

const h4style={
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#000',
    fontSize:'1.6rem'

} 

const pstyle={
    textIndent: '50px',
    letterSpacing: '2px',
    padding:'25px', 
    backgroundColor:'#fff'
  }

  return (
    <div>
      <div className="servicesstyle">
        <h4 style={h4style}>Services</h4>
      </div>
      <div className="servicereading" style={{  display: "flex",
        alignItems: "center",
        justifyContent: "center"}}>
        <p style={pstyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea<br/>
          dictumst vestibulum rhoncus est pellentesque elit ullamcorper<br/>
          dignissim. Et pharetra pharetra massa massa ultricies mi quis<br/>
          hendrerit dolor. Faucibus vitae aliquet nec ullamcorper. Diam volutpat<br/>
          commodo sed egestas egestas. Duis convallis convallis tellus id<br/>
          interdum. Tincidunt vitae semper quis lectus nulla. Vitae congue<br/>
          mauris rhoncus aenean vel elit scelerisque. Odio aenean sed adipiscing<br/>
          diam donec adipiscing tristique risus. Id aliquet lectus proin nibh<br/>
          nisl condimentum id venenatis a. Lorem ipsum dolor sit amet. Interdum<br/>
          velit laoreet id donec ultrices. Imperdiet nulla malesuada<br/>
          pellentesque elit eget gravida cum sociis. Sagittis purus sit amet<br/>
          volutpat consequat mauris. Cras fermentum odio eu feugiat pretium.<br/>
          Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Eget<br/>
          mauris pharetra et ultrices neque ornare aenean. Bibendum neque<br/>
          egestas congue quisque egestas diam in. At elementum eu facilisis sed<br/>
          odio. Praesent tristique magna sit amet purus gravida quis blandit<br/>
          turpis. Nibh venenatis cras sed felis eget. Aliquam ultrices sagittis<br/>
          orci a scelerisque purus semper eget. Posuere lorem ipsum dolor sit<br/>
          amet consectetur. Lacus vel facilisis volutpat est velit egestas.<br/>
          Fusce id velit ut tortor pretium. Mattis ullamcorper velit sed<br/>
          ullamcorper morbi tincidunt ornare massa eget. Velit dignissim sodales<br/>
          ut eu sem. Nec tincidunt praesent semper feugiat nibh. Ultrices dui<br/>
          sapien eget mi proin. Eget est lorem ipsum dolor sit amet consectetur<br/>
          adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default Services;
