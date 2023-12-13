import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "React JS Developer",
          "React Native Developer",
          "Node JS Developer",
          "MERN Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
