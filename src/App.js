import React from "react";
import Navbar from "./components/Navbar";
import './styles/App.css';
import './styles/index.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <hr size="1"/>
      <About />
      <hr size="1"/>
      <Projects />
      <hr size="1"/>
      <Contact />
      <hr size="1"/>
      <Footer />
    </div>
  );
}

export default App;
