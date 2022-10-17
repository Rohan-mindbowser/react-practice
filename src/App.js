import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "./components/Profile/Profile";
import { Home } from "./components/Home/Home";

function App() {
  const [name, Setname] = useState("Rohan");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home name={name}/>} />
          <Route path="/profile" element={<Profile name={name}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
