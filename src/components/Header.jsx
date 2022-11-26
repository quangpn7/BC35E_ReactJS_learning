//react class component, rcc
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    //Phương thức render: Chứa giao diện html của component
    //Nội dung component phải được bao phủ bởi 1 thẻ
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Cybersoft
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  to="/home"
                  aria-current="page"
                >
                  Home <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  to="/reduxdemo"
                >
                  Redux
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  to="/form"
                >
                  Form
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  to="/lifecycle"
                >
                  lifecycle
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  to="/store"
                >
                  Store
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  to="/qlsv"
                >
                  QLSV
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  to="/xucxac"
                >
                  XXG
                </NavLink>
              </li>
            </ul>
            <div className="d-flex my-2 my-lg-0">
              <NavLink to={"/btgiohang"}>
                <i className="fa fa-cart-plus" style={{ fontSize: 20 }}></i>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
