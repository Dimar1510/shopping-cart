import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AboutPage from "./pages/about/about";
import CartPage from "./pages/cart/cart";
import NotFound from "./pages/notfound/notfound";
import ProductPage from "./pages/product/product";
import "./index.css";
import HomePage from "./pages/home/home";
import Footer from "./components/Footer/Footer";
import ShopPage from "./pages/shop/shop";

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
