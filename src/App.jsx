import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "../src/components/About";
import Contact from "../src/components/Contact";
import ErrorPage from "../src/components/ErrorPage";
import Home from "../src/components/Home";
import Services from "../src/components/Services";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h1>Routing in React</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
