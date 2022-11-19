import React, { Component } from "react";
import { connect } from "react-redux";

class FormUser extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let taiKhoan = document.querySelector("#taiKhoan").value;
    let matKhau = document.querySelector("#password").value;
    console.log(taiKhoan);
    console.log(matKhau);
  };
  render() {
    return (
      <form className="card w-25 mx-auto p-3">
        <div className="card-header">
          <h3>Thông tin người dùng</h3>
        </div>
        <div className="card-body">
          <div className="form-group">
            <p>Tài khoản</p>
            <input className="form-control" name="taiKhoan" id="taiKhoan" />
          </div>
          <div className="form-group">
            <p>Mật khẩu</p>
            <input className="form-control" name="matKhau" id="password" />
          </div>
        </div>
        <button
          className="btn btn-success"
          onClick={(e) => {
            this.handleSubmit(e);
          }}
        >
          Thêm
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(FormUser);
