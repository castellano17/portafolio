import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Layout/Navbar";
import About from "./Pages/About";
import Feactured from "./Pages/Feactured";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-links mt-12">
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
