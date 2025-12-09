import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="p-8 text-white bg-gradient-to-r from-blue-600 to-blue-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <motion.div
          className="items-center justify-center max-w-3xl p-10 mx-auto my-6 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="mt-6 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We are here to help. Whether you have questions about our services,
            need to book an appointment, or require assistance, our team is
            ready to support you.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        className="grid grid-cols-1 gap-8 p-8 mx-auto lg:grid-cols-2 max-w-7xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Form Section */}
        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="p-8 shadow-xl bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl"
            whileHover={{ shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2
              className="mb-6 text-3xl font-bold text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Send us a message
            </motion.h2>

            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={
                showSuccess ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0 }
              }
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mb-4"
            >
              {showSuccess && (
                <div className="p-4 bg-green-100 border border-green-400 rounded-lg">
                  <p className="flex items-center font-bold text-green-700">
                    <span className="mr-2">✓</span>
                    Message sent successfully!
                  </p>
                </div>
              )}
            </motion.div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full p-3 transition-colors duration-300 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Your Email
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full p-3 transition-colors duration-300 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </motion.div>

              {/* Phone Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Your Phone Number
                </label>
                <motion.input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  className="w-full p-3 transition-colors duration-300 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Your Message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  className="w-full h-32 p-3 transition-colors duration-300 border-2 border-gray-300 rounded-lg resize-none focus:border-blue-500 focus:outline-none"
                  whileFocus={{ scale: 1.02 }}
                  required
                ></motion.textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center w-full gap-2 p-3 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ⏳
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>

        {/* Contact Information Section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="mb-6 text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Contact Information
          </motion.h2>

          {/* Contact Items */}
          <motion.div
            className="mb-8 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Address */}
            <motion.div
              className="flex gap-4 p-4 transition-colors duration-300 rounded-lg bg-blue-50 hover:bg-blue-100"
              variants={itemVariants}
              whileHover={{ x: 8 }}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="flex-shrink-0 text-red-600" size={24} />
              </motion.div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">
                  2nd floor, Access Towers, Nairobi
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex gap-4 p-4 transition-colors duration-300 rounded-lg bg-green-50 hover:bg-green-100"
              variants={itemVariants}
              whileHover={{ x: 8 }}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Phone className="flex-shrink-0 text-green-600" size={24} />
              </motion.div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">(254) 110-930-439</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex gap-4 p-4 transition-colors duration-300 rounded-lg bg-yellow-50 hover:bg-yellow-100"
              variants={itemVariants}
              whileHover={{ x: 8 }}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Mail className="flex-shrink-0 text-yellow-600" size={24} />
              </motion.div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-800">Email</h3>
                <a
                  href="mailto:mwangi@gmail.com"
                  className="text-blue-600 transition-colors duration-300 hover:underline"
                >
                  mwangi@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              className="flex gap-4 p-4 transition-colors duration-300 rounded-lg bg-purple-50 hover:bg-purple-100"
              variants={itemVariants}
              whileHover={{ x: 8 }}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Clock className="flex-shrink-0 text-purple-600" size={24} />
              </motion.div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-800">
                  Office Hours
                </h3>
                <p className="text-gray-600">Mon-Fri: 8am - 6pm</p>
                <p className="text-gray-600">Sat: 9am - 1pm</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            className="overflow-hidden shadow-lg rounded-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ shadow: "0 20px 40px rgba(0,0,0,0.15)" }}
          >
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.573953514913!2d32.58252007520045!3d0.3475969640206349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db6c6c5d3fbb7%3A0x8e8b4c8e4e8e4c8e!2sNairobi%20Hospital!5e0!3m2!1sen!2ske!4v1696112345678!5m2!1sen!2ske"
              width="100%"
              height="300"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Contact;
