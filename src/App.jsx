import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import AboutPage from "./pages/about/about.jsx";
import CartPage from "./pages/cart/cart.jsx";
import NotFound from "./pages/notfound/notfound.jsx";
import ProductPage from "./pages/product/product.jsx";
import "./index.css";
import HomePage from "./pages/home/home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ShopPage from "./pages/shop/shop.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:productId" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
