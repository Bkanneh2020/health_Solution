import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/Images/frogintree.JPG)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <h1 style={{padding:'10%'}}>Contact Page</h1>
      </div>

      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
