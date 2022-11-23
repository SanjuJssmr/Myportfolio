import Frontpg from "./components/Frontpg";


import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Qualification from "./components/Qualification";


function App() {
  return (
    <div className="font-myft ">
      <Frontpg />
      <About />
      <Services />
      <Projects />
      <Qualification/>
      <Contact />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
