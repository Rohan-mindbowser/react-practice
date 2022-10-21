import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Profile } from "./components/Profile/Profile";
import { Home } from "./components/Home/Home";
import { createContext } from "react";
import { Books } from "./components/Books/Books";
import { Register } from "./components/RegisterForm/Register";
import { Notfound } from "./components/Notfound";
import { Login } from "./components/Login/Login";
import { ParentComp } from "./components/ParentComp";

export const AppContext = createContext();

function App() {
  const [name, setName] = useState("Rohan");
  return (
    <>
      <AppContext.Provider value={{ name, setName }}>
        <Router>
          {/* <NavLink to="/">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/book/:id">Books</NavLink>
          <NavLink to="/register">Register</NavLink> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<ParentComp/>}>
              <Route path="profile" element={<Profile />} />
              <Route path="book/:id" element={<Books />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/login" element={<Login />} />
            {/* Route for 404 not found page  */}
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
