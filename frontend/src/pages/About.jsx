import React from "react";
import aboutImage from "../assets/surg.jpg";
import {
  Award,
  Eye,
  Heart,
  Lightbulb,
  Shield,
  Star,
  Target,
  Users,
} from "lucide-react";
import { Card, CardDescription, CardTitle } from "../components/ui/Card";
import ME from "../assets/Amos.png";
import Doc from "../assets/doc.jpg";
import Nurse from "../assets/nurse.jpg";

function About() {
  const stats = [
    { label: "Years of Experience", value: "25+" },
    { label: "Specializations", value: "15+" },
    { label: "Lives touched", value: "50,000+" },
    { label: "Patient Satisfaction", value: "98%" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We treat every patient with empathy, respect, and genuine concern for their wellbeing.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest standards in medical care, continuously improving our skills and services.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our practices and decisions.",
    },
    {
      icon: Users,
      title: "Compassion",
      description:
        "We treat every patient with empathy, respect, and genuine concern for their wellbeing.",
    },
  ];

  const leaders = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Chief Medical Officer",
      image: Nurse,
      bio: "Cardiology, 20+ years experience.",
    },
    {
      name: "Dr. James Rodriguez",
      title: "Head of Surgery",
      image: ME,
      bio: "Neurosurgery, 18+ years experience",
    },
    {
      name: "Dr. Emily Chen",
      title: "Director of Emergency Medicine",
      image: Doc,
      bio: "Emergency Medicine, 15+ years experience",
    },
  ];

  const Awards = [
    { title: "Best Hospital Award", year: "2022", icon: Award },
    { title: "Patient Safety Excellence", year: "2021", icon: Star },
    { title: "Quality Care Recognition", year: "2023", icon: Shield },
    { title: "Best Employer in Healthcare", year: "2024", icon: Users },
  ];

  return (
    <div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-white bg-blue-600">
        <div className="flex flex-col h-full p-8 mt-20">
          <h1 className="mb-4 text-5xl font-bold">
            Leading Healthcare <br />
            <span className="text-blue-300">for 25+ Years</span>
          </h1>
          <p className="max-w-2xl text-xl">
            MediCare Plus has been at the forefront of medical innovation,
            providing exceptional healthcare services with a commitment to
            excellence, compassion, and cutting-edge technology.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-6 text-left">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl font-bold text-blue-300">{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="items-center justify-center h-full p-12">
          <img
            src={aboutImage}
            alt="About Us"
            className="hidden lg:flex h-auto max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 px-4 py-8 my-8 gap-10text-left">
        <div>
          <div className="p-2 ">
            <div className="flex flex-row items-center gap-4 mb-4">
              <Target
                className="items-center justify-center mb-4 text-blue-600 "
                size={50}
              />
              <h1 className="text-4xl font-bold">Our Mission</h1>
            </div>
            <p className="flex-wrap max-w-2xl text-xl text-gray-700">
              To provide exceptional, patient-centered healthcare that combines
              advanced medical technology with compassionate care. We are
              committed to improving the health and wellbeing of our community
              through innovation, education, and unwavering dedication to
              excellence.
            </p>
          </div>

          <div className="p-2 mt-4 ">
            <div className="flex flex-row items-center gap-4 mb-4">
              <Eye
                className="items-center justify-center mb-4 text-blue-600 "
                size={50}
              />
              <h1 className="text-4xl font-bold">Our Vision</h1>
            </div>
            <p className="flex-wrap max-w-2xl text-xl text-gray-700">
              To be the leading healthcare provider, recognized for our clinical
              excellence, innovative treatments, and extraordinary patient
              experience. We envision a future where everyone has access to
              world-class healthcare in a caring, supportive environment.
            </p>
          </div>
        </div>
        <div className="px-16 mt-16 lg:mt-44">
          <div className="flex flex-row items-center justify-center h-20 w-40 gap-2 px-2 text-white bg-blue-600 rounded-lg">
            <Lightbulb />
            <div className="flex flex-col">
              <h1 className="text-md">Innovation first</h1>
              <p className="text-sm">Always advancing care</p>
            </div>
          </div>
          <div className="h-4 p-2 shadow-xl rounded-bl-lg rounded-br-lg w-32"></div>
        </div>
      </section>

      <section className="py-8 mt-8 text-white bg-gradient-to-r from-blue-900 to-teal-600">
        <div className="p-2 text-center">
          <h1 className="text-4xl font-bold">Our Core Values</h1>
          <p className="flex-wrap max-w-2xl mx-auto text-xl">
            These fundamental principles guide everything we do and shape our
            commitment to providing exceptional healthcare.
          </p>
        </div>
        <div className="grid items-center justify-between grid-cols-1 gap-8 p-6 mx-3 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card className="max-w-sm mt-4 text-center shadow-lg max-h-lvh h-72">
              <div key={index} className="mb-4">
                <value.icon
                  size={60}
                  className="p-2 mx-auto mt-8 mb-4 bg-blue-500 rounded-lg"
                />
                <CardTitle className="mt-2 text-2xl font-bold">
                  {value.title}
                </CardTitle>
                <CardDescription className="mt-2 text-gray-200">
                  {value.description}
                </CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section>
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold">Meet Our Leadership Team</h1>
          <p className="flex-wrap max-w-2xl mx-auto text-xl">
            Our experienced leaders bring decades of medical expertise and
            unwavering commitment to patient care.
          </p>
        </div>
        <div className="grid items-center justify-between grid-cols-1 gap-5 p-4 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <Card key={index} className="max-w-sm p-4 text-center">
              <img
                src={leader.image}
                className="items-center object-cover w-32 h-32 mx-auto text-center rounded-full"
              />
              <CardTitle className="mt-4 text-2xl font-bold">
                {leader.name}
              </CardTitle>
              <p className="font-semibold text-blue-600">{leader.title}</p>
              <CardDescription className="mt-2 text-gray-700">
                {leader.bio}
              </CardDescription>
            </Card>
          ))}
        </div>
      </section>
      <section>
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold">Our Journey</h1>
          <p className="flex-wrap max-w-2xl mx-auto text-xl">
            A legacy of excellence in healthcare spanning over two decades.
          </p>
        </div>
      </section>
      <section className="bg-slate-100">
        <div className="p-8 text-center">
          <h1 className="mt-4 text-4xl font-bold">Awards & Recognition</h1>
          <p>
            Our commitment to excellence has been recognized by leading
            healthcare organizations.
          </p>
          <div className="grid items-center justify-between grid-cols-1 gap-8 p-6 mx-3 mt-4 md:grid-cols-2 lg:grid-cols-4">
            {Awards.map((award, index) => (
              <div key={index} className="flex flex-col items-center">
                <award.icon
                  size={60}
                  className="p-2 mx-auto mt-8 text-white bg-blue-400 rounded-lg"
                />
                <p className="text-lg text-gray-900">{award.title}</p>
                <p className="text-blue-500 text-md">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
