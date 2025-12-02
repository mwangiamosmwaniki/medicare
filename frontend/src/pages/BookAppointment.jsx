import { ArrowLeft, Calendar, CheckCircle, Clock, Mail, Phone, PhoneCall } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function BookAppointment() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const expectations = [
    {
      title: "Confirmation Call",
      info: "Our staff will contact you within 24 hours to confirm your appointment.",
    },
    {
      title: "Preparation",
      info: "We'll send you any preparation details if needed.",
    },
    {
      title: "Arrival Time",
      info: "Please arrive 15 minutes early for check-in",
    },
  ];
  return (
    <div>
      <section className="flex p-4 mt-4">
        <Link to="/" className="hover:text-gray-500 hover:cursor-pointer">
          <ArrowLeft
            size={40}
            className="bg-gray-200 rounded text-gray-700 mt-4 mx-4 p-2"
          />
        </Link>
        <div className="flex-col">
          <h2 className="font-bold text-3xl">Book Appointment</h2>
          <p className="text-gray-700">
            Schedule your visit with our medical professionals
          </p>
        </div>
      </section>
      <section className="bg-gray-100 py-4 px-4 mx-6 my-6 rounded-md shadow-black shadow-sm">
        <div className="flex flex-row gap-3 p-2 mx-4">
          <Calendar className="inline gap-3 mt-2 text-blue-600" />
          <h2 className="font-bold text-2xl">Appointment Details</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="p-2 mx-4">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0 md:gap-0 lg:gap-10 sm:gap-0">
              <div className="flex flex-col">
                <label className="flex flex-col mt-2">
                  Department(Optional)
                  <input
                    type="text"
                    placeholder="Select Department"
                    className="rounded outline-none border-s-2 border-t-2 border-r-2 border-gray-500 mt-2"
                  />
                </label>
                <label className="flex flex-col mt-2">
                  Prefered Date *
                  <input
                    type="date"
                    required
                    className="rounded outline-none border-s-2 border-t-2 border-r-2 border-gray-500 mt-2"
                  />
                </label>
                <label className="flex flex-col mt-2">
                  Priority Level
                  <input
                    type="text"
                    placeholder="Routine"
                    className="rounded outline-none border-s-2 border-t-2 border-r-2 border-gray-500 mt-2"
                  />
                </label>
                <label className="flex flex-col mt-2">
                  Reason for visit *
                  <textarea
                    rows={4}
                    placeholder="Please describe your appointment"
                    required
                    className="rounded outline-none border-s-2 border-t-2 border-r-2 border-gray-500 mt-2"
                  />
                </label>
                <label className="flex flex-col mt-2">
                  Additional Notes
                  <textarea
                    rows={4}
                    placeholder="Any additional information you like to share"
                    className="rounded outline-none border-s-2 border-t-2 border-r-2 border-gray-500 mt-2"
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col mt-2">
                  Choose Doctor *
                  <input
                    type="text"
                    placeholder="Choose a doctor"
                    required
                    className="rounded outline-none border-s-2 border-t-2 border-r-2 border-gray-500 mt-2"
                  />
                </label>
                <label className="flex flex-col mt-2">
                  Prefered Time *
                  <input
                    type="time"
                    placeholder="Select time"
                    required
                    className="rounded outline-none border-s-2 border-t-2 border-r-2 border-gray-500 mt-2"
                  />
                </label>
              </div>
            </div>
            <div className="p-4 mt-2">
              <input
                type="submit"
                value="Book Appointment"
                className="bg-blue-500 p-2 rounded text-white hover:bg-blue-600 hover:cursor-pointer"
              />
            </div>
          </form>
        </div>
      </section>
      <section className="bg-gray-100 p-6 mx-6 my-6 rounded-md shadow-sm shadow-black">
        <h2 className="text-2xl font-bold mx-2">What to expect</h2>
        {expectations.map((expectation, index) => (
          <div key={index} className="flex flex-row p-2 mx-2 my-2">
            <CheckCircle className="text-green-500 mr-2" />
            <div className="flex-flex-col">
              <h3 className="text- font-semibold">{expectation.title}</h3>
              <p className="text-gray-700">{expectation.info}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="bg-gray-100 rounded-lg shadow-sm shadow-black mx-6 my-6 p-6">
        <div>
        <h3 className="text-2xl font-semibold mx-2">Need Help?</h3>
          <ul className="p-6">
            <li className="flex flex-row my-2">
              <PhoneCall />
              <h3 className="mx-1 font-semibold">Phone:</h3>
              <p className="mx-1">+254700000000</p>
            </li>
            <li className="flex flex-row my-2">
              <Mail className="text-green-500" />
              <h3 className="mx-1 font-semibold">Email:</h3>
              <p className="mx-1">info@medicare.com</p>
            </li>
            <li className="flex flex-row my-2">
              <Clock className="text-gray-500"/>
              <h3 className="mx-1 font-semibold">Hours:</h3>
              <p className="mx-1">Mon-Fri 8AM-6PM</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default BookAppointment;
