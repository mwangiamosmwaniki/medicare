import React from "react";
import { motion } from "framer-motion";
import {
  Bone,
  Calendar,
  GitGraph,
  Stethoscope,
  Syringe,
  Thermometer,
  User,
  Search,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardContents,
  CardTitle,
} from "../components/ui/Card";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

function Departments() {
  const departments = [
    {
      icon: User,
      title: "Pediatrics",
      description:
        "Specialized medical care for infants, children, and adolescents",
      services: ["Well-child visits", "Immunization", "Growth monitoring"],
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description:
        "Comprehensive primary care for adults with acute and chronic conditions",
      services: [
        "Physical exams",
        "Chronic disease management",
        "Health counseling",
      ],
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description:
        "Diagnosis and treatment of bone, joint, and musculoskeletal disorders",
      services: ["Fracture treatment", "Joint replacement", "Arthroscopy"],
    },
    {
      icon: GitGraph,
      title: "Neurology",
      description: "Advanced care for brain, nerve, and spinal cord conditions",
      services: [
        "Stroke care",
        "Epilepsy management",
        "Neurodiagnostic testing",
      ],
    },
    {
      icon: Syringe,
      title: "Immunology",
      description:
        "Diagnosis and treatment of immune system disorders and allergies",
      services: ["Allergy testing", "Immunotherapy", "Autoimmune disease care"],
    },
    {
      icon: Thermometer,
      title: "Internal Medicine",
      description:
        "Specialized care focusing on adult health and complex medical conditions",
      services: [
        "Fever management",
        "Infection treatment",
        "Preventive health screenings",
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="p-10 text-center bg-blue-800">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold leading-tight text-white">
            Our Specialized <br />
            <span className="text-blue-200">Medical Departments</span>
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-blue-100 md:text-xl">
            Discover a wide range of medical departments staffed with expert
            physicians and advanced technology.
          </p>
        </motion.div>
      </section>

      {/* Search Bar */}
      <section className="relative w-3/4 mx-auto mt-10 md:w-1/2 lg:w-1/3">
        <Search className="absolute text-gray-400 -translate-y-1/2 left-5 top-1/2" />
        <input
          type="search"
          placeholder="Search for a department..."
          className="w-full py-3 pl-12 pr-4 text-gray-700 transition border-2 border-gray-300 shadow-sm outline-none rounded-2xl focus:ring-2 focus:ring-blue-500"
        />
      </section>

      {/* Departments Grid */}
      <section className="p-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="max-w-sm transition shadow-xl cursor-pointer rounded-2xl hover:shadow-2xl">
                <dept.icon
                  size={60}
                  className="p-3 mx-auto mt-6 text-white bg-blue-600 shadow-md rounded-2xl"
                />
                <CardContents className="px-4 py-6">
                  <CardTitle className="text-2xl font-semibold">
                    {dept.title}
                  </CardTitle>
                  <CardDescription className="mb-4 text-gray-600 text-md">
                    {dept.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {dept.services.map((service, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 mr-3 bg-blue-600 rounded-full"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContents>
                <div className="p-4 text-center">
                  <Link to="/book-appointment">
                    <Button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-xl">
                      <Calendar className="inline-block mr-2" />
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center gap-6 p-10 m-8 bg-blue-700 md:flex-row rounded-2xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-2/3"
        >
          <h2 className="mb-3 text-3xl font-bold text-white">
            Find the Right Specialist for You
          </h2>
          <p className="mb-4 text-lg text-blue-100">
            Our expert doctors across all departments are ready to provide
            personalized and effective care.
          </p>
          <Button
            sx={{ backgroundColor: "white" }}
            className="px-6 py-3 font-semibold text-blue-700 bg-white rounded-xl hover:bg-gray-200"
          >
            Find a Doctor
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="justify-center hidden w-1/3 md:flex"
        >
          <Stethoscope size={90} className="text-blue-300" />
        </motion.div>
      </section>
    </div>
  );
}

export default Departments;
