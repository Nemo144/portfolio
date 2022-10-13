import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";

const abouts = [
  {
    title: "Web Development",
    description: "I am a good web developer",
    imgUrl: "",
  },
  // {
  //   title: "Web Development",
  //   description: "I am a good web developer",
  //   imgUrl: "",
  // },
  // {
  //   title: "Web Development",
  //   description: "I am a good web developer",
  //   imgUrl: "",
  // },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that
        <span>Good Design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div whileInView={{}}></motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
