import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import MainNavigation from "./components/MainNav";
import FooterOne from "./components/Footer";
import DetailPage from "./pages/Detailpage";

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/detail/:productId" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <FooterOne />
    </>
  );
}

export default App;
