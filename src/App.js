// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import LoanApplication from "./loanApplication";
import LoanApplicationNew from "./loanApplicationNew";
import LoanApplications from "./pages/Home/loanApplication";
import HomePage from "./homePage";
// import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div>
      <BrowserRouter basename="/phmtgla">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/2" element={<HomePage />} />
          <Route path="/loan-application" element={<LoanApplicationNew />} />
          <Route path="/loan-applicationOld" element={<LoanApplications />} />
          <Route path="/loan-applications" element={<LoanApplication />} />
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
