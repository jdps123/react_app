
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
      <>
    
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/portfolio" element={<Portfolio />} />
        <Route path="/pages/testimonial" element={<Testimonial />} />
        <Route path="/pages/projects" element={<Projects />} />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/contact" element={<Contact />} />
      </Routes>
    
    </Router>
      <Footer />
      </>
  );
}

export default App;
