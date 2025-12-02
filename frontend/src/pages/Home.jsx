import React from "react";
import Surgery from "../assets/surgery.jpg";
import PreventiveCare from "../assets/preventive.jpg";
import Brain from "../assets/brain.jpg";
import Hero from "../components/home/Hero";
// import { motion } from "motion/react"
import {
  CalendarClock,
  Clock,
  ShieldCheck,
  Star,
  Stethoscope,
} from "lucide-react";
import {
  Card,
  CardContents,
  CardTitle,
  CardDescription,
  CardIcon,
  CardActions,
} from "../components/ui/Card";
import Button from "../components/ui/Button";
import { ArrowRight, Award, Badge, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const services = [
    {
      icon: CalendarClock,
      title: "Easy Appointment Booking",
      description:
        "Book appointments with your preferred doctors in just a few clicks",
    },
    {
      icon: Stethoscope,
      title: "Expert Medical Care",
      description:
        "Access to specialized doctors and advanced medical treatments",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Private",
      description:
        "Your medical data is protected with enterprise-grade security",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Care",
      description:
        "Round-the-clock emergency services for urgent medical needs",
    },
  ];

  const ourServices = [
    {
      image: Brain,
      title: "Emergency Care",
      description:
        "24/7 emergency services with state-of-the-art facilities and expert staff.",
    },
    {
      image: Surgery,
      title: "Specialized Surgery",
      description: "Advanced surgical procedures with experienced surgeons",
    },
    {
      image: PreventiveCare,
      title: "Preventive Care",
      description: "Regular health screenings and preventive medicine programs",
    },
  ];
  const stats = [
    { label: "Doctors", value: "50+" },
    { label: "Happy clients", value: "15k+" },
    { label: "Departments", value: "15+" },
    { label: "Emergency care", value: "24/7" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      feedback:
        "The care I received was exceptional. The doctors are highly skilled and the staff is incredibly caring.",
      rating: 5,
      designation: "Patient",
    },
    {
      name: "Jane Smith",
      feedback:
        "Booking appointments online is so convenient. The entire process from booking to treatment was seamless.",
      rating: 4,
      designation: "Patient",
    },
    {
      name: "Dr. Emily Rodriguez",
      feedback:
        "Working here allows me to provide the best possible care with state-of-the-art facilities.",
      rating: 5,
      designation: "Cardiologist",
    },
  ];
  return (
    <div>
      <Hero />
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="inline text-center p-4 mt-4 w-1/4 mx-16">
            <p className="font-bold text-blue-600 text-3xl">{stat.value}</p>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>
      <section className="mt-8 py-8">
        <div className="flex flex-col items-center justify-center text-center p-2">
          <h1 className="text-4xl font-bold">Why Choose MediCare?</h1>
          <p className="text-xl text-gray-600 w-3/4">
            We combine advanced medical technology with compassionate care to
            provide you with the best possible healthcare experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 mx-3 items-center justify-between">
          {services.map((service, index) => (
            <Card
              key={index}
              className="max-w-sm shadow-lg text-center max-h-lvh h-72"
            >
              <service.icon
                size={60}
                className="bg-yellow-400 mx-auto text-blue-700 rounded-lg p-1 mt-6"
              />
              <CardContents className="px-2 py-4">
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardContents>
            </Card>
          ))}
        </div>
      </section>
      <section className="my-8 py-8 bg-gradient-to-r from-blue-900 to-teal-600 text-white">
        <div className="text-center p-2">
          <h1 className="text-4xl font-bold">
            Comprehensive Healthcare Services
          </h1>
          <p className="text-xl flex-wrap">
            From routine checkups to specialized treatments, we offer a full
            range of medical services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 items-center justify-between">
          {ourServices.map((services, index) => (
            <Card key={index} className="max-w-sm">
              <img
                src={services.image}
                className="w-full h-44 object-cover mx-auto rounded-tl-md rounded-tr-md text-center items-center"
              />
              <CardContents className="px-2 py-4">
                <CardTitle>{services.title}</CardTitle>
                <CardDescription>{services.description}</CardDescription>
                <CardActions>
                  <Button className="px-4 py-1 text-blue-600 text-lg rounded hover:text-blue-800">
                    Learn More
                    <ArrowRight className="inline-block ml-2" />
                  </Button>
                </CardActions>
              </CardContents>
            </Card>
          ))}
        </div>
      </section>
      <section className="my-8 py-8">
        <div className="flex flex-col items-center justify-center text-center p-2">
          <h1 className="text-4xl font-bold">What Our Patients Say</h1>
          <p className="text-xl w-3/4 text-gray-600">
            Don't just take our word for it - hear from our satisfied patients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 mx-3 items-center justify-between">
          {testimonials.map((testimony, index) => (
            <Card key={index} className="max-w-md mx-auto mt-6 h-60">
              <CardContents className="px-4 py-6">
                <div className="px-2 flex flex-row mb-4">
                  {[...Array(testimony.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" />
                  ))}
                  {[...Array(5 - testimony.rating)].map((_, i) => (
                    <Star key={i} className="text-gray-300" />
                  ))}
                </div>
                <CardDescription className="italic">
                  "{testimony.feedback}"
                </CardDescription>
                <div className="pt-2 mb-1">
                  <h3 className="px-2 text-lg font-semibold">
                    {testimony.name}
                  </h3>
                  <p className="px-2 text-sm text-gray-500">
                    {testimony.designation}
                  </p>
                </div>
              </CardContents>
            </Card>
          ))}
        </div>
      </section>
      <section className="mt-8 p-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="flex flex-col items-center justify-center text-center p-2">
          <Award className="mx-auto mb-4 text-orange-400" size={60} />
          <h1 className="text-4xl font-bold">
            Ready to Experience Better Healthcare?
          </h1>
          <p className="text-xl w-3/4 text-gray-300 p-2">
            Join thousands of satisfied patients who trust MediCare Plus for
            their healthcare needs. Book your appointment today and take the
            first step towards better health.
          </p>
        </div>
        <div className="flex flex-row gap-5 items-center justify-center p-4">
          <Link to="/book-appointment">
            <Button
              className="hover:bg-gray-300 text-blue-400"
              sx={{
                color: "blue",
                backgroundColor: "white",
                hover: { backgroundColor: "gray" },
              }}
            >
              <Calendar className="inline-block ml-2" />
              Schedule an Appointment
            </Button>
          </Link>
          <Button
            className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            sx={{
              color: "white",
              backgroundColor: "rgb(59 130 246)",
              hover: { backgroundColor: "gray" },
            }}
          >
            <Phone className="inline-block ml-1" />
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;
