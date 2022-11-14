import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
