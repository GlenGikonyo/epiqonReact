import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetails";
import Contact from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
import PreloaderAndCursor from "./components/PreLoaderAndCursor";

function App() {
  return (
    <>
      <PreloaderAndCursor />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
