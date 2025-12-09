import React from "react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Badge,
  Brain,
  Calendar,
  Heart,
  Shield,
  Users2,
} from "lucide-react";
import Surgery from "../assets/surg.jpg";
import Doct from "../assets/doct.jpeg";
import Nurse from "../assets/nurse.jpg";
import Doc from "../assets/doc.jpg";
import Surg from "../assets/surg.jpeg";
import Prevent from "../assets/preventive.jpg";
import {
  Card,
  CardContents,
  CardDescription,
  CardTitle,
} from "../components/ui/Card";

function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const services = [
    {
      image: Surgery,
      title: "Neurology",
      description:
        "Specialized care for neurological disorders and brain-related conditions",
      features: ["Brain Surgery", "Stroke Care", "Epilepsy Treatment"],
    },
    {
      image: Doct,
      title: "Cardiology",
      description:
        "Advanced heart care with diagnostic, surgical, and rehabilitation support",
      features: ["Heart Surgery", "ECG Monitoring", "Cardiac Rehab"],
    },
    {
      image: Surg,
      title: "Orthopedics",
      description:
        "Comprehensive treatment for bone, joint, and muscle disorders",
      features: ["Joint Replacement", "Fracture Care", "Arthroscopy"],
    },
    {
      image: Prevent,
      title: "Pediatrics",
      description:
        "Complete medical care tailored for infants, children, and adolescents",
      features: ["Vaccination", "Child Wellness", "Growth Monitoring"],
    },
    {
      image: Nurse,
      title: "Dermatology",
      description:
        "Expert care for skin, hair, and nail conditions using advanced techniques",
      features: ["Skin Screening", "Laser Therapy", "Acne Treatment"],
    },
    {
      image: Doc,
      title: "General Surgery",
      description:
        "Comprehensive surgical services for a wide range of conditions",
      features: ["Appendectomy", "Hernia Repair", "Laparoscopic Surgery"],
    },
  ];

  const programs = [
    {
      icon: Shield,
      title: "Cancer Care",
      description:
        "Comprehensive oncology services with advanced treatment options",
    },
    {
      icon: Heart,
      title: "Cardiac Wellness",
      description:
        "Preventive heart programs focused on long-term cardiovascular health",
    },
    {
      icon: Brain,
      title: "Neuro Recovery",
      description:
        "Restorative programs designed to support neurological healing and function",
    },
    {
      icon: Users2,
      title: "Family Health Program",
      description:
        "Holistic healthcare plans tailored for the needs of the entire family",
    },
  ];

  const justifications = [
    {
      icon: Users2,
      header: "Expert Medical Team",
      description:
        "Board-certified physicians with years of specialized experience.",
    },
    {
      icon: Users2,
      header: "Modern Medical Technology",
      description:
        "State-of-the-art equipment ensures precision and effective treatment.",
    },
    {
      icon: Users2,
      header: "Personalized Patient Care",
      description:
        "Treatment plans tailored to individual needs and conditions.",
    },
    {
      icon: Users2,
      header: "24/7 Support Services",
      description:
        "Round-the-clock medical assistance for emergencies and routine care.",
    },
  ];

  return (
    <div>
      <motion.section
        className="p-8 bg-blue-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col items-center justify-center p-6 mt-4 text-center">
          <motion.h2
            className="mb-3 text-4xl font-bold text-white"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Comprehensive Healthcare <br />
            <span className="text-blue-100">Services</span>
          </motion.h2>
          <motion.p
            className="my-4 text-2xl text-gray-100 w-3xl md:w-full sm:w-full lg:w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            From routine checkups to complex surgeries, we offer a complete
            range of medical services with cutting-edge technology and
            compassionate care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <Button sx={{ backgroundColor: "white", color: "blue" }}>
              <Calendar className="inline-block mr-3" />
              Schedule Consultation
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <section>
        <div className="flex flex-col items-center justify-center p-6 mt-4 text-center">
          <motion.h2
            className="text-2xl font-bold text-black"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Our Medical Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            We provide world-class medical care across multiple specialties with
            experienced doctors and state-of-art facilities.
          </motion.p>
        </div>
        <motion.div
          className="grid items-center justify-between grid-cols-1 gap-8 p-4 mx-3 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -12, transition: { duration: 0.4 } }}
              >
                <Card className="max-w-sm text-center transition-shadow shadow-lg hover:shadow-xl">
                  <img
                    src={service.image}
                    className="items-center object-cover w-full mx-auto h-44 rounded-tl-md rounded-tr-md"
                  />
                  <CardContents className="px-2 py-4">
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex text-gray-700">
                          <div className="w-2 h-2 my-2 mr-2 bg-blue-800 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button>
                      Book Appointment
                      <ArrowRight />
                    </Button>
                  </CardContents>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.section
        className="my-8 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col items-center justify-center p-6 mt-4 text-center">
          <motion.h2
            className="text-3xl font-bold text-black"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Specialized Care Programs
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Advanced treatment programs designed for specific health conditions
            and needs
          </motion.p>
        </div>
        <motion.div
          className="grid items-center justify-between grid-cols-1 gap-8 p-4 pb-10 mx-3 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              <Card className="max-w-sm text-center shadow-lg">
                <program.icon
                  size={60}
                  className="p-4 mx-auto mt-4 text-white bg-blue-700 rounded-md"
                />
                <CardContents className="px-2 py-4">
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardContents>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="py-8 my-10 shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="px-4">
          <motion.h2
            className="text-3xl font-bold text-black"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Why Choose Medicare?
          </motion.h2>
        </div>
        <div className="px-4">
          {justifications.map((justification, index) => (
            <motion.div
              key={index}
              className="flex flex-row gap-3 py-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <justification.icon
                size={60}
                className="p-4 text-blue-700 bg-blue-200 rounded"
              />
              <div className="flex flex-col my-1 mr-2">
                <h3 className="font-bold text 2xl">{justification.header}</h3>
                <p className="text-lg text-gray-600">
                  {justification.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="absolute w-24 h-16 mb-6 bg-blue-700 rounded-lg right-10"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{
            scale: 1.12,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <h2 className="text-xl font-bold text-center text-white">50+</h2>
          <p className="text-sm text-center text-gray-200">Expert Doctors</p>
        </motion.div>
      </motion.section>

      <motion.section
        className="items-center p-8 bg-blue-800 justify center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div>
          <div className="flex flex-col items-center justify-center">
            <motion.h2
              className="py-2 text-3xl font-bold text-white"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Ready to Experience Better Healthcare?
            </motion.h2>
            <motion.p
              className="w-3/4 py-2 text-xl text-center text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Take the first step towards better health. Our medical experts are
              here to provide you with the care and attention you deserve.
            </motion.p>
          </div>
          <motion.div
            className="flex flex-row items-center justify-center py-4 space-x-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Link to="/book-appointment">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <Button
                  className="items-center text-center hover:bg-gray-300"
                  sx={{ backgroundColor: "white", color: "blue" }}
                >
                  <Calendar className="inline mr-2" />
                  Book Your Appointment
                </Button>
              </motion.div>
            </Link>

            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Button
                variant="outlined"
                className="items-center text-center hover:bg-gray-100 hover:text-blue-700"
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                <Calendar className="inline mr-2" />
                Find a Doctor
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Services;
