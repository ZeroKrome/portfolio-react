import Home from "./pages/Home";
import Header from "./components/Header";
import "./App.css";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <main>
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

export default App;
