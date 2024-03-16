import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from './pages/Contact';
import DashBoard from './pages/Dashboard';
import Home from './pages/Home';
import DetailSection from './pages/DetailSection';


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/detail/:id" element={<DetailSection />}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );

}
