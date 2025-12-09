import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "./components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClosedCaption,
  Facebook,
  Hamburger,
  Heart,
  Instagram,
  Linkedin,
  Menu,
  MenuIcon,
  Twitter,
  X,
} from "lucide-react";

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "About us",
      path: "/about",
    },
    {
      title: "Doctors",
      path: "/doctors",
    },
    {
      title: "Departments",
      path: "/departments",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuVariants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
    }),
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
    exit: { opacity: 0, x: -30, transition: { duration: 0.2 } },
  };

  return (
    <div className="font-primary">
      <motion.nav
        className="sticky top-0 z-50 shadow shadow-blue-600 bg-slate-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-row justify-between w-full py-3 text-black">
          <motion.div
            className="flex mt-1 ml-3 justify-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="flex px-2 font-sans text-xl font-bold text-blue-600">
              Medi<span className="text-yellow-500">Care</span>
            </h1>
          </motion.div>

          {/*--- Desktop Navigation ---*/}
          <motion.div
            className="flex items-center justify-center text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                className="hidden gap-10 px-4 text-center transition-colors duration-300 lg:flex hover:text-blue-600"
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={item.path}
                  className={`transition-all duration-300 ${
                    isActive(item.path)
                      ? "font-bold text-blue-600"
                      : "hover:text-blue-600"
                  }`}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="hidden px-5 py-1 mr-3 transition-colors duration-300 bg-yellow-500 rounded-full lg:flex right-4 hover:bg-yellow-600"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Button sx={{ color: "white", fontWeight: 600 }}>
              Get started
            </Button>
          </motion.div>

          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mx-2 text-blue-600 cursor-pointer lg:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {menuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </motion.button>
        </div>

        {/*--- Mobile Navigation ---*/}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="left-0 items-center justify-center w-full px-3 lg:hidden bg-zinc-50 min-w-screen"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  className="w-full px-4 py-3 space-y-3 text-blue-600 transition-colors duration-300 hover:text-blue-800"
                  custom={i}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`transition-all duration-300 block ${
                      isActive(item.path)
                        ? "font-bold text-blue-700"
                        : "hover:font-semibold"
                    }`}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="flex-1 min-h-screen">{children}</main>

      <motion.footer
        className="p-4 mx-0 text-center text-gray-300 bg-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid justify-between grid-cols-1 px-10 mb-4 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            className="flex flex-col flex-wrap mb-4 space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row gap-2">
              <Heart className="text-red-600" size={40} />
              <h2 className="mb-2 text-2xl font-bold text-white">
                Medi<span className="text-yellow-500">Care</span>
              </h2>
            </div>
            <p className="flex max-w-xs text-sm">
              Providing exceptional healthcare services with cutting-edge
              technology and compassionate care.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center mb-4 space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="mb-2 text-2xl font-bold text-white">Quick Links</h2>
            <Link
              to="/"
              className="transition-colors duration-300 hover:underline hover:text-yellow-500"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="transition-colors duration-300 hover:underline hover:text-yellow-500"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="transition-colors duration-300 hover:underline hover:text-yellow-500"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="transition-colors duration-300 hover:underline hover:text-yellow-500"
            >
              Contact
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="mb-2 text-2xl font-bold text-white">Departments</h2>
            <p className="text-sm transition-colors duration-300 cursor-pointer hover:text-yellow-500">
              Cardiology
            </p>
            <p className="text-sm transition-colors duration-300 cursor-pointer hover:text-yellow-500">
              Neurology
            </p>
            <p className="text-sm transition-colors duration-300 cursor-pointer hover:text-yellow-500">
              Pediatrics
            </p>
            <p className="text-sm transition-colors duration-300 cursor-pointer hover:text-yellow-500">
              Orthopedics
            </p>
            <p className="text-sm transition-colors duration-300 cursor-pointer hover:text-yellow-500">
              Emergency
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-bold text-white">
              Follow us on social media:
            </p>
            <div className="flex flex-row justify-center mt-2 space-x-4">
              <motion.a
                href="#"
                className="transition-colors duration-300 hover:text-blue-600"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <Facebook />
              </motion.a>
              <motion.a
                href="#"
                className="transition-colors duration-300 hover:text-blue-400"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <Twitter />
              </motion.a>
              <motion.a
                href="#"
                className="transition-colors duration-300 hover:text-pink-600"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <Instagram />
              </motion.a>
              <motion.a
                href="#"
                className="transition-colors duration-300 hover:text-green-600"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <Linkedin />
              </motion.a>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="pt-4 my-2 text-sm border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} MediCare. All rights reserved.
        </motion.div>
      </motion.footer>
    </div>
  );
}

export default Layout;
