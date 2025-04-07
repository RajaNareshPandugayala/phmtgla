import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  // Form states
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "login") {
      setLoginData((prev) => ({ ...prev, [name]: value }));
    } else {
      setRegisterData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle login
  const handleLogin = () => {
    const { email, password } = loginData;
    if (email && password) {
      navigate("/loan-application");
    } else {
      alert("Please fill in all login fields.");
    }
  };

  // Handle register
  const handleRegister = () => {
    const { name, email, password } = registerData;
    if (name && email && password) {
      navigate("/loan-application");
    } else {
      alert("Please fill in all registration fields.");
    }
  };

  return (
    <div className="SignupAndLoginDivParent">
      {/* Login Div */}
      <div
        className={`SignupAndLoginDiv LoginDiv`}
        style={{ display: isLogin ? "block" : "none" }}
      >
        <div className="SignupAndLoginTaglineDiv">
          <div className="signupTaglineDiv SignupDetailsPageButton">
            <span className="signupTaglineSpan">
              <i className="ri-login-box-line"></i>Login Page
            </span>
          </div>
        </div>

        <div className="SignupAndLoginFormDiv">
          <div className="SignupDiv">
            <div className="signupFormParent">
              <div className="signupForm">
                <div className="formDiv">
                  <input
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    autoComplete="true"
                    required
                    className="email"
                    value={loginData.email}
                    onChange={(e) => handleInputChange(e, "login")}
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    id="password"
                    name="password"
                    autoComplete="true"
                    required
                    className="password"
                    value={loginData.password}
                    onChange={(e) => handleInputChange(e, "login")}
                  />
                  <button
                    className="SignupButton submitButton"
                    type="button"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>

                <div className="SinupButtonPageDiv">
                  <button
                    type="button"
                    className="SinupButtonPage LogInDetailsPageButton"
                    onClick={() => setIsLogin(false)}
                  >
                    No account yet?{" "}
                    <span className="SinupButtonPageSpan">Register</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Div */}
      <div
        className={`SignupAndLoginDiv SignupDiv`}
        style={{ display: isLogin ? "none" : "block" }}
      >
        <div className="SignupAndLoginTaglineDiv">
          <div className="signupTaglineDiv SignupDetailsPageButton">
            <span className="signupTaglineSpan">
              <i className="ri-registered-line"></i>Register Page
            </span>
          </div>
        </div>

        <div className="SignupAndLoginFormDiv">
          <div className="SignupDiv">
            <div className="signupFormParent">
              <div className="signupForm">
                <div className="formDiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    id="username"
                    name="name"
                    autoComplete="true"
                    required
                    className="username"
                    value={registerData.name}
                    onChange={(e) => handleInputChange(e, "register")}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    autoComplete="true"
                    required
                    className="email"
                    value={registerData.email}
                    onChange={(e) => handleInputChange(e, "register")}
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    id="password"
                    name="password"
                    autoComplete="true"
                    required
                    className="password"
                    value={registerData.password}
                    onChange={(e) => handleInputChange(e, "register")}
                  />
                  <button
                    className="SignupButton submitButton"
                    type="button"
                    onClick={handleRegister}
                  >
                    Register
                  </button>
                </div>

                <div className="SinupButtonPageDiv">
                  <button
                    type="button"
                    className="SinupButtonPage LogInDetailsPageButton"
                    onClick={() => setIsLogin(true)}
                  >
                    Already have an account?{" "}
                    <span className="SinupButtonPageSpan">Log In</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
