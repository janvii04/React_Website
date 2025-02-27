import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import OTPVerification from "./pages/OTPVerification";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/otpVerify" element={<OTPVerification />} />

      </Routes>
    </>
  );
}
