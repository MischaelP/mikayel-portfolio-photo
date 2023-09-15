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
import Dashboard from './admin/Dashboard';
import { Auth0Provider } from '@auth0/auth0-react'; 
import { createRoot } from 'react-dom/client';
import Profile from './admin/Profile'


const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const clientID = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;


function App() {
  return (
    <>
      <Auth0Provider domain={domain} clientId={clientID} redirectUri={window.location.origin} >
          <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="*" element={<Notfound />} />
              </Routes>
            <Footer />
            </BrowserRouter>
      </Auth0Provider>
    </>

   
  )
}

export default App