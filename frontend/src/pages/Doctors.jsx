import React from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import {
  Award,
  Calendar,
  Funnel,
  Search,
  Star,
  Stethoscope,
} from "lucide-react";
import {
  Card,
  CardContents,
  CardTitle,
  CardDescription,
} from "../components/ui/Card";

function Doctors() {
  const stats = [
    { value: "50+", Label: "Expert Doctors" },
    { value: "15+", Label: "Specializations" },
    { value: "25+", Label: "Years of Experience" },
    { value: "98%", Label: "Patient Satisfaction" },
  ];

  const qualifications = [
    {
      icon: Award,
      qualification: "Board Certified",
      description:
        "All our doctors are board certified in their specialties with rigorous training and continuous education.",
    },
    {
      icon: Star,
      qualification: "Highly Experienced Specialists",
      description:
        "Our medical team consists of senior specialists with years of hands-on clinical expertise.",
    },
    {
      icon: Stethoscope,
      qualification: "Advanced Medical Training",
      description:
        "Doctors undergo advanced fellowship programs and continuous skill development in modern medical practices.",
    },
  ];

  const fadeUp = {
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
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Meet our Expert
            <br />
            <span className="text-blue-200">Medical Team</span>
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-blue-100 md:text-xl">
            Our board-certified physicians bring years of experience and
            expertise to provide you with the highest medical care.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 gap-10 mt-10 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-blue-200">{stat.value}</p>
              <p className="text-gray-200">{stat.Label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Search */}
      <section className="relative w-3/4 mx-auto mt-10 md:w-1/2 lg:w-1/3">
        <Search className="absolute text-gray-400 -translate-y-1/2 left-5 top-1/2" />
        <input
          type="search"
          placeholder="Search doctors by name or specialization..."
          className="w-full py-3 pl-12 pr-4 text-gray-700 transition border-2 border-gray-300 shadow-sm outline-none rounded-2xl focus:ring-2 focus:ring-blue-500"
        />
      </section>

      {/* No Results */}
      <section className="bg-[#fdf0e9] p-10 mt-10 rounded-2xl">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Stethoscope size={40} className="text-gray-400" />
          <p className="mt-3 text-black">No doctors found</p>
          <p className="mt-3 mb-3 text-gray-600">
            Try adjusting your search criteria or browse all doctors
          </p>
          <Button
            className="mt-3"
            sx={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Clear Filters
          </Button>
        </motion.div>
      </section>

      {/* Why Our Doctors Are Different */}
      <section className="p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mt-6 text-3xl font-bold">
            Why Our Doctors Are Different
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our physicians provide personalized, compassionate care using the
            latest medical advances and evidence-based treatments.
          </p>
        </div>

        <div className="grid gap-8 mt-10 lg:grid-cols-3">
          {qualifications.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <Card className="max-w-sm mx-auto text-center shadow-lg rounded-2xl h-80">
                <item.icon
                  size={60}
                  className="p-3 mx-auto mt-6 text-white bg-blue-700 shadow-md rounded-2xl"
                />
                <CardContents className="px-4 py-6">
                  <CardTitle className="text-xl font-semibold">
                    {item.qualification}
                  </CardTitle>
                  <CardDescription className="mt-2 text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardContents>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="p-10 mx-10 my-10 text-center bg-blue-800 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white">
            Schedule Your Appointment Today
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-blue-100">
            Take the first step towards better health. Our experienced doctors
            are ready to give you the care you deserve.
          </p>

          <div className="flex justify-center">
            <Button
              className="mt-6"
              sx={{
                color: "blue",
                backgroundColor: "white",
                hover: { backgroundColor: "#e5e7eb" },
              }}
            >
              <Calendar className="inline-block mr-2" />
              Book your consultation
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Doctors;
