import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ReactGA from "react-ga4";
import { theme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShopperSection from './components/ShopperSection';
import BusinessSection from './components/BusinessSection';
import WhySection from './components/WhySection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdminPage from './pages/AdminPage';

// Configure axios defaults
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

// Initialize Google Analytics
ReactGA.initialize("G-CH2Y2KX2YC");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <ShopperSection />
              <BusinessSection />
              <WhySection />
              <AboutSection />
              <FAQSection />
              <ContactSection />
              <Footer />
            </>
          } />
        </Routes>
        <ToastContainer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
