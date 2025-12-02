import { Locate, Mail, Map, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("url", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setFormData({
          email: "",
          name: "",
          phone: "",
          message: "",
        });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        console.error("backend error", result.error);
        alert("Failed to send message, try again later");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Cannot submit form, try again later");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <section className="p-8 bg-blue-600 text-white">
        <div className="p-10 text-center items-center justify-center my-6 max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold">Get in Touch</h1>
          <p className="text-xl mt-6">
            We are here to help. Whether you have questions about our services,
            need to book an appointment, or require assistance, our team is
            ready to support you.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 p-4">
        <div className="max-w-2xl mx-4 bg-slate-50 rounded-lg p-6 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
          {showSuccess && (
            <div className="mb-2 ">
              <p className="text-green font-bold">Message sent successfully!</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Your Email"
              className="p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="p-2 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Your Message"
              className="p-2 border border-gray-300 rounded-md h-32"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="inline-block ml-2" />
            </button>
          </form>
        </div>
        <div className="max-w-lg mx-auto p-6">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2">
            <MapPin className="text-red-600 inline-block mr-2" /> 123 Health St,
            Wellness City, HC 45678
          </p>
          <p className="mb-2">
            <Phone className="text-green-500 inline-block mr-2" /> (123)
            456-7890
          </p>
          <p className="mb-2">
            <Mail className="inline-block mr-2" />
            <a
              href="mailto:mwangi@gmail.com"
              className="text-blue-200 hover:underline"
            />
            mwangi@gmail.com
          </p>
          <p className="mb-2">
            <strong>Office Hours:</strong> Mon-Fri: 8am - 6pm, Sat: 9am - 1pm
          </p>
          <div className="mt-4">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.573953514913!2d32.58252007520045!3d0.3475969640206349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db6c6c5d3fbb7%3A0x8e8b4c8e4e8e4c8e!2sNairobi%20Hospital!5e0!3m2!1sen!2ske!4v1696112345678!5m2!1sen!2ske"
              width="100%"
              height="250"
              className="border-0 rounded-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
