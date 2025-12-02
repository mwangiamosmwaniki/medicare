import React from "react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
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
import {
  Card,
  CardContents,
  CardDescription,
  CardTitle,
} from "../components/ui/Card";

function Services() {
  const services = [
    {
      image: Surgery,
      title: "Neurology",
      description:
        "Specialized care for neurological disorders and brain-related conditions",
      features: ["Brain Surgery", "Sroke Care", "Epilepsy Treatment"],
    },
    {
      image: Surgery,
      title: "Neurology",
      description:
        "Specialized care for neurological disorders and brain-related conditions",
      features: ["Brain Surgery", "Sroke Care", "Epilepsy Treatment"],
    },
    {
      image: Surgery,
      title: "Neurology",
      description:
        "Specialized care for neurological disorders and brain-related conditions",
      features: ["Brain Surgery", "Sroke Care", "Epilepsy Treatment"],
    },
    {
      image: Surgery,
      title: "Neurology",
      description:
        "Specialized care for neurological disorders and brain-related conditions",
      features: ["Brain Surgery", "Sroke Care", "Epilepsy Treatment"],
    },
    {
      image: Surgery,
      title: "Neurology",
      description:
        "Specialized care for neurological disorders and brain-related conditions",
      features: ["Brain Surgery", "Sroke Care", "Epilepsy Treatment"],
    },
    {
      image: Surgery,
      title: "Neurology",
      description:
        "Specialized care for neurological disorders and brain-related conditions",
      features: ["Brain Surgery", "Sroke Care", "Epilepsy Treatment"],
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
      title: "Cancer Care",
      description:
        "Comprehensive oncology services with advanced treatment options",
    },
    {
      icon: Brain,
      title: "Cancer Care",
      description:
        "Comprehensive oncology services with advanced treatment options",
    },
    {
      icon: Users2,
      title: "Cancer Care",
      description:
        "Comprehensive oncology services with advanced treatment options",
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
      header: "Expert Medical Team",
      description:
        "Board-certified physicians with years of specialized experience.",
    },
    {
      icon: Users2,
      header: "Expert Medical Team",
      description:
        "Board-certified physicians with years of specialized experience.",
    },
    {
      icon: Users2,
      header: "Expert Medical Team",
      description:
        "Board-certified physicians with years of specialized experience.",
    },
  ];
  return (
    <div>
      <section className="bg-blue-800 p-8">
        <div className="flex flex-col items-center text-center justify-center p-6 mt-4">
          <h2 className="text-4xl text-white font-bold mb-3">
            Comprehensive Healthcare <br />
            <span className="text-blue-100">Services</span>
          </h2>
          <p className="text-gray-100 text-2xl my-4 w-3xl md:w-full sm:w-full lg:w-3xl">
            From routine checkups to complex surgeries, we offer a complete
            range of medical services with cutting-edge technology and
            compassionate care.
          </p>
          <Button sx={{ backgroundColor: "white", color: "blue" }}>
            <Calendar className="inline-block mr-3" />
            Schedule Consultation
          </Button>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center text-center p-6 mt-4">
          <h2 className="text-black text-2xl font-bold">
            Our Medical Services
          </h2>
          <p className="text-gray-700 text-lg">
            We provide world-class medical care across multiple specialties with
            experienced doctors and state-of-art facilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mx-3 items-center justify-between">
          {services.map((service, index) => (
            <Card key={index} className="max-w-sm shadow-lg text-center">
              <img
                src={service.image}
                className="w-full h-44 object-cover mx-auto rounded-tl-md rounded-tr-md items-center"
              />
              <CardContents className="px-2 py-4">
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex text-gray-700">
                      <div className="bg-blue-800 h-2 w-2 rounded-full mr-2 my-2" />
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
          ))}
        </div>
      </section>
      <section className="bg-gray-50 my-8">
        <div className="flex flex-col items-center justify-center text-center p-6 mt-4">
          <h2 className="text-black text-3xl font-bold">
            Specialized Care Programs
          </h2>
          <p className="text-gray-700 text-lg">
            Advanced treatment programs designed for specific health conditions
            and needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 pb-10 mx-3 items-center justify-between">
          {programs.map((program, index) => (
            <Card key={index} className="max-w-sm shadow-lg text-center">
              <program.icon
                size={60}
                className="bg-blue-700 rounded-md p-4 mx-auto mt-4 text-white"
              />
              <CardContents className="px-2 py-4">
                <CardTitle>{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardContents>
            </Card>
          ))}
        </div>
      </section>
      <section className="shadow-lg my-10 py-8">
        <div className="px-4">
          <h2 className="text-black text-3xl font-bold">
            Why Choose Medicare?
          </h2>
        </div>
        <div className="px-4">
          {justifications.map((justification, index) => (
            <div key={index} className="flex flex-row gap-3 py-3">
              <justification.icon
                size={60}
                className="text-blue-700 bg-blue-200 rounded p-4"
              />
              <div className="flex flex-col mr-2 my-1">
                <h3 className="font-bold text 2xl">{justification.header}</h3>
                <p className="text-gray-600 text-lg">
                  {justification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-blue-700 absolute rounded-lg h-16 w-24 right-10 mb-6">
          <h2 className="text-white text-center text-xl font-bold">50+</h2>
          <p className="text-gray-200 text-sm text-center">Expert Doctors</p>
        </div>
      </section>
      <section className="bg-blue-800 items-center justify center p-8">
        <div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl text-white font-bold py-2">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="text-xl text-gray-200 text-center py-2 w-3/4">
              Take the first step towards better health. Our medical experts are
              here to provide you with the care and attention you deserve.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-3 py-4">
            <Link to="/book-appointment">
              <Button
                className="text-center items-center hover:bg-gray-300"
                sx={{ backgroundColor: "white", color: "blue" }}
              >
                <Calendar className="inline mr-2" />
                Book Your Appointment
              </Button>
            </Link>

            <Button
              variant="outlined"
              className="text-center items-center hover:bg-gray-100 hover:text-blue-700"
              sx={{
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              <Calendar className="inline mr-2" />
              Find a Doctor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
