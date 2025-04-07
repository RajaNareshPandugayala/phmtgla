import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import LoanApplication from "./pages/Home/loanApplication";
// import { SignupAndLogin } from './userRegistration/registration';

function App() {
  return (
    <div>
      <BrowserRouter basename="/phmtgla">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loan-application" element={<LoanApplication />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <SignupAndLogin /> */}
    </div>
  );
}

export default App;
