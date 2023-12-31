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
        <motion.h2 style={{fontSize:'75px',fontFamily:'cursive'}}>Empowering your digital dreams</motion.h2>
      </motion.div>
      <div className="imageContainer">
        <img
          src="https://socialgroup.vjti.ac.in/Assets/Allimages/Digital/digital.png"
          alt=""
        />
      </div>
      <motion.h1 variants={textVariants} style={{ fontSize: "90px",fontFamily:'cursive'}}>
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
        // url="../../src/particles.json"
        options={
          {
            "fullScreen": {
              "enable": true,
              "zIndex": -1
            },
            "particles": {
              "number": {
                "value": 20,
                "density": {
                  "enable": false,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#fff"
              },
              "shape": {
                "type": "star",
                "options": {
                  "sides": 5
                }
              },
              "opacity": {
                "value": 0.8,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 4,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 600,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": ["grab"]
                },
                "modes": {
                  "bubble": {
                    "size": 5
                  }
                },
                "onclick": {
                  "enable": true,
                  "mode": ["bubble"]
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }          
        }
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </motion.div>
  );
};

export default Hero;
