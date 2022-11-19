import React, { Component } from "react";
import { connect } from "react-redux";

class TableNguoiDung extends Component {
  render() {
    return (
      <table className="table table-hover border mt-5">
        <thead className="bg-dark text-white">
          <tr>
            <th>Tài khoản</th>
            <th>Mật khẩu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>userA</td>
            <td>123</td>
          </tr>
          <tr>
            <td>userB</td>
            <td>456</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(TableNguoiDung);
