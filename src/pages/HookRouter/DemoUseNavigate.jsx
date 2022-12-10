import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import useRoute from "../../hooks/useRoute";

const DemoUseNavigate = () => {
  // const navigate = useNavigate();
  const { params, navigate } = useRoute;
  const frmLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email cannot be blank!")
        .email("Email is invalid !"),
      password: yup.string().required("Password cannot be blank !"),
    }),
    onSubmit: (values) => {
      console.log(values);
      if (values.email === "quangpn7@gmail.com" && values.password === `123`) {
        navigate("/xucxac");
      } else {
        alert("Wrong password, username...");
      }
    },
  });

  return (
    <div className="border shadow p-5 w-25 mx-auto mt-5">
      <form className="container" onSubmit={frmLogin.handleSubmit}>
        <h3>Login</h3>
        <div className="form-group mb-2">
          <p className="mb-0">Email</p>
          <input
            className="form-control"
            name="email"
            onChange={frmLogin.handleChange}
            onBlur={frmLogin.handleBlur}
          />
          {frmLogin.errors.email ? (
            <div className="alert text-danger">{frmLogin.errors.email}</div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <p className="mb-0">Password:</p>
          <input
            className="form-control"
            name="password"
            onChange={frmLogin.handleChange}
            onBlur={frmLogin.handleBlur}
          />
          {frmLogin.errors.password ? (
            <div className="alert text-danger">{frmLogin.errors.password}</div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default DemoUseNavigate;
