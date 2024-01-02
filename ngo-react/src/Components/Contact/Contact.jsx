import React from "react";


const AddressMap = () => {
  return (
    <div className="google-map-code">
      <iframe
        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28792.324195806723!2d83.9784614!3d25.5703185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399275985564a721%3A0x3c49a62eeb3d93be!2sBuxar%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700121102187!5m2!1sen!2sin"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d144888.7753305359!2d-118.34118520956406!3d33.99627121088265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1700121452551!5m2!1sen!2sin"
        width="1000"
        height="450"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
};


const Contact = () => {
  return (
    <div>
      <AddressMap />
    </div>
  );
};

export default Contact;