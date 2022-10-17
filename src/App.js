import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "./components/Profile/Profile";
import { Home } from "./components/Home/Home";
import { createContext } from "react";

export const AppContext = createContext();

function App() {
  const [name, setName] = useState("Rohan");
  return (
    <>
      <AppContext.Provider value={{ name, setName }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
