import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Profile } from "./components/Profile/Profile";
import { Home } from "./components/Home/Home";
import { createContext } from "react";
import { Books } from "./components/Books/Books";

export const AppContext = createContext();

function App() {
  const [name, setName] = useState("Rohan");
  return (
    <>
      <AppContext.Provider value={{ name, setName }}>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/book/:id" element={<Books />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
