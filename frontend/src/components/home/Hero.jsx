import React from "react";
import bgImage from "../../assets/hos.jpg";
import Button from "../ui/Button";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div
        className="flex flex-row space-x-6 p-4"
        style={{
          backgroundImage: `linear-gradient(rgba(178, 196, 255, 0.6), rgba(196, 217, 255, 0.6)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "70vh",
        }}
      >
        <div className="flex-wrap flex-grow text-white text-center items-center justify-center sm:m-auto md:m-auto m-auto">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 0.98 }}
            className="text-6xl font-bold text-blue-600"
          >
            Your Health is Our
            <br /> <span className="text-yellow-600">Top Priority</span>
          </motion.h1>
          <p className="text-2xl font-semibold text-black mt-4 w-3/4 m-auto">
            Experience world-class healthcare with cutting-edge technology,
            expert doctors, and personalized care tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 pt-7 items-center justify-center">
            <Button variant="contained">Get free consultation</Button>
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
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
