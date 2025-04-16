// Auth.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // import navigate hook

const HomePage = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // initialize navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isSignup
      ? "http://localhost:5000/api/signup"
      : "http://localhost:5000/api/login";

    const payload = isSignup
      ? formData
      : { email: formData.email, password: formData.password };

    try {
      const res = await axios.post(endpoint, payload);

      if (isSignup) {
        setMessage(res.data.message || "Signup successful");
        if (res.data.message === "Signup successful") {
          navigate("/loan-application"); // redirect after signup
        }
      } else {
        localStorage.setItem("token", res.data.token);
        setMessage("Login successful");
        navigate("/loan-application"); // redirect after login
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="SignupAndLoginDivParent">
      <div className="SignupAndLoginDiv LoginDiv">
        <div className="SignupAndLoginTaglineDiv">
          <div className="signupTaglineDiv SignupDetailsPageButton">
            <span className="signupTaglineSpan">
              <i
                className={
                  isSignup ? "ri-registered-line" : "ri-login-box-line"
                }
              ></i>{" "}
              {isSignup ? "Register Page" : "Login Page"}
            </span>
          </div>
        </div>
        <div className="SignupAndLoginFormDiv">
          <div className="signupFormParent">
            <div className="signupForm">
              <form onSubmit={handleSubmit} className="formDiv">
                {isSignup && (
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                  />
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="SignupButton submitButton">
                  {isSignup ? "Signup" : "Login"}
                </button>
                <div className="SinupButtonPageDiv">
                  <button
                    type="button"
                    className="SinupButtonPage LogInDetailsPageButton"
                    onClick={() => {
                      setIsSignup(!isSignup);
                      setMessage("");
                    }}
                  >
                    {isSignup
                      ? "Already have an account? "
                      : "No account yet? "}
                    <span className="SinupButtonPageSpan">
                      {isSignup ? "Login" : "Register"}
                    </span>
                  </button>
                </div>
                <p className="SignupMessage">{message}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
