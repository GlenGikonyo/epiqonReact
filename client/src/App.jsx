import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetails";
import Contact from "./pages/ContactUs";
import Training from "./pages/Training";
import Portfolio from "./pages/Portfolio";
import PreloaderAndCursor from "./components/PreLoaderAndCursor";
import Admin from "./pages/Admin";
import Login from "./components/Login";
import { useState, useCallback } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("username") && !!localStorage.getItem("password")
  );

  // 🔒 Stable functions using useCallback
  const handleLogin = useCallback(() => setIsLoggedIn(true), []);
  const handleLogout = useCallback(() => setIsLoggedIn(false), []);

  return (
    <>
      <PreloaderAndCursor />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/admin"
            element={
              isLoggedIn ? (
                <Admin onLogout={handleLogout} />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
