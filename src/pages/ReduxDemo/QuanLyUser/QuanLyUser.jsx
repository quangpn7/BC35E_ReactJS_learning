import React, { Component } from "react";
import { connect } from "react-redux";
import FormUser from "./FormUser";
import TableNguoiDung from "./TableNguoiDung";

class QuanLyUser extends Component {
  render() {
    return (
      <div>
        <hr />
        <h3>Bài Tập Quản Lý User</h3>
        <div className="container">
          <FormUser />
          <TableNguoiDung />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(QuanLyUser);
