import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "./components/Profile/Profile";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { ProtectedRoute } from "./Common/ProtectedRoutes/ProtectedRoute";
import { Home } from "./components/Home/Home";
import { createContext } from "react";
import { Books } from "./components/Books/Books";
import { Register } from "./components/RegisterForm/Register";
import { Notfound } from "./components/Notfound";
import { Login } from "./components/Login/Login";
import { ParentComp } from "./components/ParentComp";
import { Jewellery } from "./components/jewellery/Jewellery";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ViewProduct } from "./components/view product/viewProduct";
import { Bracelet } from "./components/Category/Bracelet";
import { Ring } from "./components/Category/Ring";
import { Necklace } from "./components/Category/Necklace";
import { Earring } from "./components/Category/Earring";

const queryClient = new QueryClient();

export const AppContext = createContext();

function App() {
  const [name, setName] = useState("Rohan");
  return (
    <>
      <AppContext.Provider>
        <QueryClientProvider client={queryClient}>
          <Router>
            {/* <NavLink to="/">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/book/:id">Books</NavLink>
          <NavLink to="/register">Register</NavLink> */}
            <Routes>
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="user" element={<ParentComp />}>
                  <Route path="profile" element={<Profile />} />
                  <Route path="book/:id" element={<Books />} />
                  <Route path="register" element={<Register />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/dash" element={<ProtectedRoute />} />
                {/* Route for 404 not found page  */}
                {/* <Route path="*" element={<Notfound />} /> */}
              </Route>
              <Route path="jewellery" element={<Jewellery />} />
              <Route path="product/:id" element={<ViewProduct />} />
              <Route path="bracelet" element={<Bracelet />} />
              <Route path="ring" element={<Ring />} />
              <Route path="necklace" element={<Necklace />} />
              <Route path="earring" element={<Earring />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider>
    </>
  );
}

export default App;
