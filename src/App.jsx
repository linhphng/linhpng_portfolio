import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
import { Return } from "./components/Navbar/Return/Return";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    AOS.refresh();
  }, 500);
});

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Skills />
      <Contact />
      <Footer />
      <Return />
    </div>
  );
}

export default App;
