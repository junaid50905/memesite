import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Signup } from "./pages/signup/Signup";
import { Signin } from "./pages/Signin/Signin";
import '../src/App.css';
import Products from "./pages/products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import MainLayout from "./pages/MainLayout";
import About from "./pages/About/About";

const App = () => {
  return (
    <BrowserRouter>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
