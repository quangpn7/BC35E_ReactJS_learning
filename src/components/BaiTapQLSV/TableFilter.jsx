import React, { Component } from "react";

export default class TableFilter extends Component {
  render() {
    return (
      <div className="d-flex g-4 mt-3">
        <input type="text" name="searchBar" placeholder="Search..." />
        <select name="searchBy" className="mx-1">
          <option value="msSV">Mã SV</option>
          <option value="hoTen">Họ tên</option>
          <option value="phone">Số điện thoại</option>
          <option value="Email">Email</option>
        </select>
        <button className="btn btn-primary">Search</button>
      </div>
    );
  }
}
