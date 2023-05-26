import React from "react";
import handshake from "./handshake.webp";
const Contact = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="bg-persian-400 p-9 col-span-2 w-full h-full">
        <img src={handshake}></img>
      </div>
    </div>
  );
};

export default Contact;
