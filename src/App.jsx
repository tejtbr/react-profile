import styles from "./App.module.css";
import { Navbar } from "./components/Navbar";
import { Experience } from "./components/Skills/Experience";
import { About } from "./components/about/about";
import { Hero } from "./components/hero/hero";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}

export default App;
