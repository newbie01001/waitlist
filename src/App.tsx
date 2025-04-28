import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShopperSection from './components/ShopperSection';
import BusinessSection from './components/BusinessSection';
import WhySection from './components/WhySection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

// Configure axios defaults
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
axios.defaults.headers.common['Content-Type'] = 'application/json';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Navbar />
        <Hero />
        <ShopperSection />
        <BusinessSection />
        <WhySection />
        <FAQSection />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
