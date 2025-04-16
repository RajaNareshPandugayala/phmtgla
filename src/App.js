// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import LoanApplication from "./loanApplication";
import HomePage from "./homePage";
// import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div>
      <BrowserRouter basename="/phmtgla">
        <Routes>
          <Route path="/2" element={<Home />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/loan-application" element={<LoanApplication />} />
          {/* <Route
            path="/loan-application"
            element={
              <PrivateRoute>
                <LoanApplication />
              </PrivateRoute>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
