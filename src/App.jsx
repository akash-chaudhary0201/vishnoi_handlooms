import Navvbar from "./Components/Navvbar/Navvbar";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Components/Products/Product";
import ProductDetails from "./Components/Products/ProductDetails";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navvbar />
        <Routes>
          <Route path="/" element={<Main />} /> dev
          <Route path="/products" element={<Product />} />
          <Route path="/category/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
