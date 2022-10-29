import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  return (
    <div>
      <h1>Testimonials</h1>
    </div>
  );
};

export default Testimonial;
