import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Jewellery } from "./components/jewellery/Jewellery";
import { QueryClient, QueryClientProvider } from "react-query";
import { ViewProduct } from "./components/view product/viewProduct";
import { Bracelet } from "./components/Category/Bracelet";
import { Ring } from "./components/Category/Ring";
import { Necklace } from "./components/Category/Necklace";
import { Earring } from "./components/Category/Earring";
import { Checkout } from "./components/checkout/Checkout";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          {/* <NavLink to="/">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/book/:id">Books</NavLink>
          <NavLink to="/register">Register</NavLink> */}
          <Routes>
            {/* <Route path="/" element={<ProtectedRoute />}>
              <Route path="user" element={<ParentComp />}>
                <Route path="profile" element={<Profile />} />
                <Route path="book/:id" element={<Books />} />
                <Route path="register" element={<Register />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/dash" element={<ProtectedRoute />} />
            </Route> */}
            <Route path="/" element={<Jewellery />} />
            <Route path="jewellery" element={<Jewellery />} />
            <Route
              path="product/:cat/:id"
              forceRefresh={true}
              element={<ViewProduct />}
            />
            <Route path="bracelet" element={<Bracelet />} />
            <Route path="ring" element={<Ring />} />
            <Route path="necklace" element={<Necklace />} />
            <Route path="earring" element={<Earring />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
