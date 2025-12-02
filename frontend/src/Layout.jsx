import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "./components/ui/Button";
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

  return (
    <div className="font-primary">
      <nav>
        <div className="flex flex-row w-full shadow shadow-blue-600 justify-between py-3 text-black bg-slate-50">
          <div className="flex mt-1 ml-3 justify-left">
            <h1 className="flex px-2 font-sans text-xl font-bold text-blue-600">
              Medi<span className="text-yellow-500">Care</span>
            </h1>
          </div>
          {/*--- Desktop Navigation ---*/}
          <div className="flex items-center justify-center text-center">
            {navItems.map((item) => (
              <div className="hidden gap-10 px-4 text-center lg:flex hover:text-blue-600">
                <Link
                  key={item.path}
                  to={item.path}
                  className={
                    isActive(item.path) ? "font-bold text-blue-600" : ""
                  }
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
          <div className="hidden px-5 py-1 mr-3 bg-yellow-500 rounded-full lg:flex right-4 hover:bg-yellow-600">
            <Button sx={{ color: "white", fontWeight: 600 }}>
              Get started
            </Button>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden mx-2 text-blue-600  cursor-pointer"
          >
            {menuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
        {/*--- Mobile Navigation ---*/}
        {menuOpen && (
          <div className="lg:hidden items-center justify-center px-3 bg-zinc-50 min-w-screen h-1/2 left-0 w-full">
            {navItems.map((item) => (
              <div className="text-blue-600 hover:text-blue-800 px-4 py-3 space-y-3">
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={
                    isActive(item.path) ? "font-bold hover:font-bold" : ""
                  }
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        )}
      </nav>
      <main className="flex-1 min-h-screen">{children}</main>
      <footer className="p-4 mx-0 text-center text-gray-300 bg-slate-900">
        <div className="grid justify-between grid-cols-1 px-10 mb-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col flex-wrap mb-4 space-x-4">
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
          </div>

          <div className="flex flex-col justify-center mb-4 space-x-4">
            <h2 className="mb-2 text-2xl font-bold text-white">Quick Links</h2>
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
          <div>
            <h2 className="mb-2 text-2xl font-bold text-white">Departments</h2>
            <p className="text-sm">Cardiology</p>
            <p className="text-sm">Neurology</p>
            <p className="text-sm">Pediatrics</p>
            <p className="text-sm">Orthopedics</p>
            <p className="text-sm">Emergency</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">
              Follow us on social media:
            </p>
            <div className="flex flex-row justify-center mt-2 space-x-4">
              <a href="#" className="hover:text-blue-600">
                <Facebook />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter />
              </a>
              <a href="#" className="hover:text-pink-600">
                <Instagram />
              </a>
              <a href="#" className="hover:text-green-600">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-4 my-2 text-sm border-t border-gray-700">
          &copy; {new Date().getFullYear()} MediCare. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Layout;
