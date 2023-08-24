import React from 'react'
import './index.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Services from "../src/pages/Services";
import Home from "../src/pages/Home";
import Portfolio from "../src/pages/Portfolio";
import Contact from "../src/pages/Contact";
import Login from "./pages/Login";
import Notfound from './pages/Notfound';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Register from './pages/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Portofolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>

   
  )
}

export default App