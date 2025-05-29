import Hero from "./components/Hero";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import "./index.css";
import "./App.css";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Logo />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
