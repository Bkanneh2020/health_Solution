import React from "react";

const House = () => {
  const Healthlinks = [
    {
      title: "Nursing",
    },
    {
      title: "Therapy in Session",
    },
    {
      title: "Mindfulness",
    },
    { title: "Peace of Mind" },
    {
      title: "Exercise",
      description:''
    },
  ];

  const btnstyle={
    padding:'10px',
    fontSize:"1.4rem",
    marginRight:'10px'
  
    
  }

  return (
    <div >
    <h1>This Home heathcare Page</h1>
    <div className="btnmap">
    {Healthlinks.map(function(links){
        return <button style={btnstyle}>{links.title}</button>
    })}
    </div>
   </div>
  );
};

export default House;
