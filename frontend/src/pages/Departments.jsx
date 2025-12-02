import {
  Bone,
  Calendar,
  GitGraph,
  Heading5Icon,
  Heart,
  Search,
  Stethoscope,
  Syringe,
  Thermometer,
  User,
} from "lucide-react";
import React from "react";
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
      services: ["Well-child visits", "Immunization", "Growth moitoring"],
    },
    {
      icon: Stethoscope,
      title: "Pediatrics",
      description:
        "Specialized medical care for infants, children, and adolescents",
      services: ["Well-child visits", "Immunization", "Growth moitoring"],
    },
    {
      icon: Bone,
      title: "Pediatrics",
      description:
        "Specialized medical care for infants, children, and adolescents",
      services: ["Well-child visits", "Immunization", "Growth moitoring"],
    },
    {
      icon: GitGraph,
      title: "Pediatrics",
      description:
        "Specialized medical care for infants, children, and adolescents",
      services: ["Well-child visits", "Immunization", "Growth moitoring"],
    },
    {
      icon: Syringe,
      title: "Pediatrics",
      description:
        "Specialized medical care for infants, children, and adolescents",
      services: ["Well-child visits", "Immunization", "Growth moitoring"],
    },
    {
      icon: Thermometer,
      title: "Pediatrics",
      description:
        "Specialized medical care for infants, children, and adolescents",
      services: ["Well-child visits", "Immunization", "Growth moitoring"],
    },
  ];
  return (
    <div>
      {/*Hero*/}
      <section className="bg-blue-800 p-8">
        <div className="flex flex-col items-center justify-center text-center p-6 mt-4">
          <h2 className="text-4xl font-bold text-white">
            Our Specialized <br />
            <span className="text-blue-100">Medical Departments</span>
          </h2>
          <p className="text-gray-200 max-w-4xl my-4 text-md md:text-2xl sm:text-2xl">
            Discover our wide range of medical departments, each staffed with
            expert physicians and equipped with advanced technologyto provide
            you the bast care
          </p>
        </div>
      </section>
      <section className="relative w-3/4 lg:w-1/2 md:w-1/2 mt-6 items-center justify-center">
        <input
          type="search"
          placeholder="search for a department (e.g cardiology, pediatics..."
          className="text-zinc-600 w-full py-1 pl-10 pr-4 m-3 rounded-xl cursor-text border-2 border-gray-500 outline-none transition-all duration-200"
        />
        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 inline" />
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mx-3 items-center justify-between">
          {departments.map((department, index) => (
            <Card key={index} className="max-w-sm shadow-lg">
              <department.icon
                size={60}
                className="bg-blue-600 mx-auto text-white rounded-lg p-1 mt-6"
              />
              <CardContents className="px-2 py-4">
                <CardTitle>{department.title}</CardTitle>
                <CardDescription>{department.description}</CardDescription>
                <ul className="space-y-1">
                  {department.services.map((service, idx) => (
                    <li key={idx} className="flex text-gray-600">
                      <div className="bg-blue-700 h-2 w-2 my-2 rounded-full mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </CardContents>
              <div className="items-center justify center text-center p-3">
                <Link to="/book-appointment">
                  <Button
                    className="items-center justify-center hover:bg-blue-500 hover:text-gray-100"
                    sx={{ backgroundColor: "blue", color: "white" }}
                  >
                    <Calendar className="inline-block ml-2" />
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section className="flex flex-row bg-blue-700 p-8 m-8 rounded-md gap-3">
        <div className="p-4 sm:w-3/4 md:w-full">
          <h2 className="text-white font-bold py-2 sm:text-3xl md:text-2xl">
            Find the Right Specialist for You
          </h2>
          <p className="text-blue-100 mb-2 text-md md:text-xl sm:text-2xl">
            Our team of expert doctors across all departments is here to provide
            you with personalized and effective care. Find a doctor and book
            your consultation today.
          </p>
          <Button
            sx={{ backgroundColor: "white", color: "blue" }}
            className="my-3"
          >
            Find a Doctor
          </Button>
        </div>
        <div className="hidden lg:flex md:flex items-center justify-center p-16">
          <Stethoscope size={80} className="text-blue-400" />
        </div>
      </section>
    </div>
  );
}

export default Departments;
