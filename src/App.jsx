import Navvbar from "./Components/Navvbar/Navvbar";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Components/Products/Product";
import ProductDetails from "./Components/Products/ProductDetails";
import About from "./Components/AboutUs/About";
import "./index.css";
import ContactUs from "./Components/contactUs/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navvbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/category/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
