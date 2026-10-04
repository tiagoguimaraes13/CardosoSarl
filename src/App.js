import './App.css';
import {DemoLanguageProvider} from './i18n/DemoLanguage';
import { useDemoLanguage } from "./i18n/DemoLanguage";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import Homepage from './components/Homepage/Homepage';
import { Footer } from "./components/Footer/Footer"; // Footer import

// Page transition wrapper component
const PageWrapper = ({
  children
}) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [location]);
  return <div className={`page-wrapper ${isAnimating ? 'fade-enter' : 'fade-enter-active'}`}>
      {children}
    </div>;
};

function AppContent() {
  const {
    tr
  } = useDemoLanguage();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div className="loading-screen">
        <div className="loader"></div>
        <p>{tr("Chargement...")}</p>
      </div>;
  }

  return <Router>
      <div className="app-container">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<PageWrapper>
                <Homepage />
              </PageWrapper>} />
          </Routes>
        </main>

        {
        /* Add Footer here */
      }
        <Footer /> {
        /* This will render your Footer component */
      }

        {
        /* Back to top button */
      }
        <button className="back-to-top" onClick={() => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })}>
          ↑
        </button>
      </div>
    </Router>;
}

export default function App(){return <DemoLanguageProvider><AppContent /></DemoLanguageProvider>;}
