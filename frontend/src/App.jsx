import Layout from "./Layout";
import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Departments from "./pages/Departments";
import About from "./pages/About";
import Services from "./pages/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookAppointment from "./pages/BookAppointment";

function App() {
  return (
    <div className="font-primary">
      <BrowserRouter>
        <Layout currentPageName={<Home/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
