import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Feactured from "./Pages/Feactured";
import useLocalStorage from "use-local-storage";
import { useEffect } from "react";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="App" data-theme={theme}>
      <Navbar switchTheme={switchTheme} />
      <div>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/feactured">Feactured</Link>
        <Link to="/contact">Contact</Link> */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feactured" element={<Feactured />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
