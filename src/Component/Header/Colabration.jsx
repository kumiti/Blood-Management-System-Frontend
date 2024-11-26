// eslint-disable-next-line no-unused-vars
import React from "react";
import s1 from "./img/10004.png";
import s2 from "./img/10003 (1).png";
import s3 from "./img/10001 (1) copy 3.png";
import s4 from "./img/10003.png";
import s5 from "./img/download.png";

const images = [s1, s2, s3, s4, s5];

const Collaboration = () => {
  return (
    <div className="w-full flex justify-around ">
      <div className="flex  animate-scroll">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="w-32 h-auto mx-14 my-9"
            alt={`image-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Collaboration;
