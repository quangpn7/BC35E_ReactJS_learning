import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Page404 extends Component {
  render() {
    return (
      <div className="container">
        <h3>Khong tim thay noi dung</h3>
        <h3>
          Press here{" "}
          <NavLink className="btn btn-primary" to="/">
            return home page
          </NavLink>
        </h3>
      </div>
    );
  }
}
