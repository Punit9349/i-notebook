import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes> 
        <Route path="/" element={<Home/>} />

        <Route path="/about" element={<About/>} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
