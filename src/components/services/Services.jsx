import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          About Digital VJTI 
          <br /> Digital transformation for VJTI
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>About </motion.b> Digital VJTI
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b style={{color:"orange"}}>what we do</motion.b> 
          </h1>
          {/* <h1>WHAT WE DO?</h1> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        
        
        
        <motion.div
          className="box"
          style={{ background: "lightgray", color: "black" }}
        >
          <h1>About us  
            :  At Digital VJTI, we take pride in capturing the vibrant essence of VJTI's life 
            
            and propelling it into the digital realm. 
            </h1>
            <p>
            As the torchbearers of technological evolution, we are dedicated to digitizing the landscape of VJTI.

Our commitment extends beyond digital transformation; we are catalysts for innovation and learning. Digital VJTI is not just a platform—it's a community that thrives on knowledge sharing and collaboration. Through our hackathons, workshops, and events, we empower individuals to explore the boundless possibilities that technology offers.
         
        
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
