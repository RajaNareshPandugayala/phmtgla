import React, { useState } from "react";

function Home() {
  const [isLogin, setIsLogin] = useState(true); // false means show Signup by default

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
              <form action={"/loan-application"} className="signupForm">
                <div className="formDiv">
                  <input
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    autoComplete="true"
                    required
                    className="email"
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    id="password"
                    name="password"
                    autoComplete="true"
                    required
                    className="password"
                  />
                  <button className="SignupButton submitButton" type="submit">
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
              </form>
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
              <form action={"/loan-application"} className="signupForm">
                <div className="formDiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    id="username"
                    name="name"
                    autoComplete="true"
                    required
                    className="username"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    autoComplete="true"
                    required
                    className="email"
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    id="password"
                    name="password"
                    autoComplete="true"
                    required
                    className="password"
                  />
                  <button className="SignupButton submitButton" type="submit">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
