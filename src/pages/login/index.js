import { useEffect, useState } from "react";

import useAuth from "../../hooks/useAuth";
import React from "react";
import Slider from "../../components/slider/index";
import LoginForm from "../../components/loginForm/index";
import Divider from "../../components/divider/index";
import "./login.scss";
const imagesName = [
  "Product-overview.svg",
  "Products-bug-reporting.svg",
  "Products-crash-reporting.svg",
];

export default function Login() {
  return (
    <div className="login-page-container">
      <div className="left-side">
        <Slider imagesName={imagesName} />
      </div>

      <div className="right-side">
        <div className="body">
          <img src="/images/Instabug-icon.svg" alt="logo" />

          <h1>Log in to Instabug</h1>
          <button className="social-button google">
            <div className="icon">
              <img src="/images/socialIcons/google-color.svg" height="38" />
            </div>
            Google
          </button>
          <button className="social-button github">
            <div className="icon">
              <img src="/images/socialIcons/github.svg" height="38" />
            </div>
            GitHub
          </button>
          <button className="social-button microsoft">
            <div className="icon">
              <img src="/images/socialIcons/microsoft.svg" height="38" />
            </div>
            Microsoft
          </button>

          <Divider />

          <LoginForm />

          <div className="row">
            <div>
              Don't have an account?{" "}
              <span className="highlighted">Sign up</span>
            </div>
            <span className="highlighted"> Login via SSO</span>
          </div>

          <p className="muted">Trusted by the top companies</p>

          <ul className="partners">
            <li>
              <img src="/images/partners/buzzfeed.png" />
            </li>
            <li>
              <img src="/images/partners/asana-logo.png" />
            </li>
            <li>
              <img src="/images/partners/OnePlus_logo.svg" />
            </li>
            <li>
              <img src="/images/partners/houseparty.png" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
