import { useFormik } from "formik";
import * as yup from "yup";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

export default function LoginForm() {
  const { login, error } = useAuth();
  const formik = useFormik({
    validateOnChange: true,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      login(values.email, values.password);
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("Email is required.")
        .email("Enter a valid email address."),
      password: yup
        .string()
        .required("Password is required.")
        .min(6, "Password must be 6 characters or more.")
        .test(
          "password",
          "The password must contain at least 1 uppercase letters and one number.",
          function (value = "") {
            let email = this.parent.email?.split("@")[0];
            return (
              !value.includes(email) && value.match(/^(?=.*[A-Z])(?=.*\d).+$/)
            );
          }
        ),
    }),
  });

  useEffect(() => {
    document.title = "Login";
  }, []);

  let emailError = formik.touched.email && formik.errors.email;
  let passwordError = formik.touched.password && formik.errors.password;
  return (
    <form onSubmit={formik.handleSubmit}>
      {error && (
        <div className="alert alert-danger">Incorrect email or password</div>
      )}
      <label htmlFor="email" className="">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        {...formik.getFieldProps("email")}
        placeholder="you@company.com"
        className={emailError ? "invalidInput" : ""}
      />
      {emailError && <div className="error">{formik.errors.email}</div>}
      <div className="row">
        <label htmlFor="password">Password</label>
        <span className="muted">Forgot password?</span>
      </div>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="6+ characters"
        className={passwordError ? "invalidInput" : ""}
        {...formik.getFieldProps("password")}
      />
      {passwordError && <div className="error">{formik.errors.password}</div>}
      <button
        className="main-button"
        type="submit"
        disabled={emailError || passwordError}
      >
        Log in
      </button>
    </form>
  );
}
