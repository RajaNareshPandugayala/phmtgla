import React, { useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

function Home() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "login") {
      setLoginData((prev) => ({ ...prev, [name]: value }));
    } else {
      setRegisterData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleLogin = async () => {
    const { email, password } = loginData;
    if (!email || !password) {
      alert("Please fill in all login fields.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/loan-application");
    } catch (error) {
      const errorCode = error.code;

      if (errorCode === "auth/user-not-found") {
        alert("Login failed: Email ID is not found, please try to register");
      } else if (errorCode === "auth/wrong-password") {
        alert("Login failed: Your password is wrong, please give a valid one");
      } else {
        alert("Login failed: " + error.message);
      }
    }
  };

  const handleRegister = async () => {
    const { name, email, password } = registerData;
    if (!name || !email || !password) {
      alert("Please fill in all registration fields.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: name });
      navigate("/loan-application");
    } catch (error) {
      const errorCode = error.code;

      if (errorCode === "auth/email-already-in-use") {
        alert(
          "Registration failed: Email already in use. Please try to log in."
        );
      } else if (errorCode === "auth/invalid-email") {
        alert("Registration failed: Invalid email address.");
      } else if (errorCode === "auth/weak-password") {
        alert("Registration failed: Password should be at least 6 characters.");
      } else {
        alert("Registration failed: " + error.message);
      }
    }
  };

  return (
    <div className="SignupAndLoginDivParent">
      {/* Login Section */}
      <div
        className="SignupAndLoginDiv LoginDiv"
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
          <div className="signupFormParent">
            <div className="signupForm">
              <div className="formDiv">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={loginData.email}
                  onChange={(e) => handleInputChange(e, "login")}
                  required
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e, "login")}
                  required
                />
                <button
                  type="button"
                  onClick={handleLogin}
                  className="SignupButton submitButton"
                >
                  Login
                </button>
              </div>
              <div className="SinupButtonPageDiv">
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="SinupButtonPage LogInDetailsPageButton"
                >
                  No account yet?{" "}
                  <span className="SinupButtonPageSpan">Register</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Register Section */}
      <div
        className="SignupAndLoginDiv SignupDiv"
        style={{ display: !isLogin ? "block" : "none" }}
      >
        <div className="SignupAndLoginTaglineDiv">
          <div className="signupTaglineDiv SignupDetailsPageButton">
            <span className="signupTaglineSpan">
              <i className="ri-registered-line"></i>Register Page
            </span>
          </div>
        </div>
        <div className="SignupAndLoginFormDiv">
          <div className="signupFormParent">
            <div className="signupForm">
              <div className="formDiv">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={registerData.name}
                  onChange={(e) => handleInputChange(e, "register")}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={registerData.email}
                  onChange={(e) => handleInputChange(e, "register")}
                  required
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={registerData.password}
                  onChange={(e) => handleInputChange(e, "register")}
                  required
                />
                <button
                  type="button"
                  onClick={handleRegister}
                  className="SignupButton submitButton"
                >
                  Register
                </button>
              </div>
              <div className="SinupButtonPageDiv">
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="SinupButtonPage LogInDetailsPageButton"
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
  );
}

export default Home;
