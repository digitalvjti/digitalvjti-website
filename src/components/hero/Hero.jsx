import "./hero.scss";
import { motion } from "framer-motion";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  return (
    <motion.div className="hero" style={{ textAlign: "center" }}>
      <motion.div style={{ marginBottom: "4vh" }}>
        <motion.h2>Empowering your digital dreams!!</motion.h2>
      </motion.div>
      <div className="imageContainer">
        <img
          src="https://socialgroup.vjti.ac.in/Assets/Allimages/Digital/digital.png"
          alt=""
        />
      </div>
      <motion.h1 variants={textVariants} style={{ fontSize: "100px" }}>
        Digital VJTI
      </motion.h1>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Create content to improve digital reach of VJTI
      </motion.div>
      <Particles
        id="tsparticles"
        url="../../src/particles.json"
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </motion.div>
  );
};

export default Hero;
