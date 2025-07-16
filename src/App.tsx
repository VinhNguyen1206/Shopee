import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./components/LoginComponent/LoginFormComponent/Login";
import LoginQr from "./components/LoginComponent/LoginQrComponent/LoginQr";
import LoginOtp from "./components/LoginComponent/LoginOtpComponent/LoginOtp";

import SellerSignUp from "./components/SellerComponent/SellerSignUp";
import SellerLogin from "./components/SellerComponent/SellerLogin";
import SellerLoginQr from "./components/SellerComponent/SellerLoginQr";
import SellerLoginOtp from "./components/SellerComponent/SellerLoginOtp";

import ForgetPassword from "./common/ForgetPassword";
import Help from "./pages/Help";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart";
import SellerForgetPassword from "./components/SellerComponent/SellerForgetPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/qr" element={<LoginQr />} />
      <Route path="/login/otp" element={<LoginOtp />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/help" element={<Help />} />
      <Route path="/sellersignup" element={<SellerSignUp />} />
      <Route path="/sellerlogin" element={<SellerLogin />} />
      <Route path="/sellerlogin/qr" element={<SellerLoginQr />} />
      <Route path="/sellerlogin/otp" element={<SellerLoginOtp />} />
      <Route path="/sellerforgetpassword" element={<SellerForgetPassword />} />
      <Route path="/product/:slug" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
