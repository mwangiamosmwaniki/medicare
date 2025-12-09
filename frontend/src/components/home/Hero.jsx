import React from "react";
import bgImage from "../../assets/hos.jpg";
import Button from "../ui/Button";
import { motion } from "framer-motion";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div
        className="flex flex-row p-4 space-x-6"
        style={{
          backgroundImage: `linear-gradient(rgba(178, 196, 255, 0.6), rgba(196, 217, 255, 0.6)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "70vh",
        }}
      >
        <motion.div
          className="flex-wrap items-center justify-center m-auto text-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl font-bold text-blue-600"
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
          >
            Your Health is Our
            <br /> <span className="text-yellow-600">Top Priority</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="w-3/4 m-auto mt-4 text-2xl font-semibold text-black"
          >
            Experience world-class healthcare with cutting-edge technology,
            expert doctors, and personalized care tailored to your unique needs.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-5 sm:flex-row pt-7"
          >
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="contained">Get free consultation</Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="contained"
                className="text-white outline-white hover:bg-gray-400"
                sx={{
                  backgroundColor: "#E7E7E7",
                  color: "#0B0B45",
                  fontWeight: "bold",
                }}
              >
                Watch our story
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
