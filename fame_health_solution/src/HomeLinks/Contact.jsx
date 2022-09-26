import React from "react";
import ContactForm from "./HomepageComponenets/ContactComponent/ContactForm";
import ContactInfo from "./HomepageComponenets/ContactComponent/ContactInfo";
import SmallContactInfo from "./HomepageComponenets/ContactComponent/SmallContactInfo";

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
        <h1 style={{padding:'10%'}}>Contact Us</h1>
      </div>

      <ContactInfo />
    <SmallContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
