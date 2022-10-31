import React, { Component } from "react";
// import style from "../State/DemoStyle.css";
import BaiTapState from "./BaiTapState";
export default class DemoState extends Component {
  userName = "Quang";

  state = {
    login: false,
  };
  //STATE là thuộc tính có sẵn của react class component chứa các giá trị làm thay đổi giáo diện

  renderLogin = () => {
    if (this.state.login) {
      return <span>Hello {this.userName}</span>;
    } else {
      return (
        <button
          className="btn btn-success"
          onClick={() => {
            this.handleLogin();
          }}
        >
          Log in
        </button>
      );
    }
  };

  handleLogin = () => {
    this.setState(
      {
        login: true,
        //this.setState là phương thức có sẵn của react class component, dùng để thay đổi giá trị của state. Sau khi giá trị của state thay đổi thì giao diện sẽ tự động render lại
        //Phương thức setState là phương thức bất đồng bộ (Cần phải dùng cách đang dùng hoặc async await)
      },
      () => {
        //Đây sẽ là fnc được chạy sau khi đã thực hiện xong việc state
        console.log(this.state.login);
      }
    );
  };
  render() {
    return (
      <div>
        <nav className="nav justify-content-end text-light bg-dark">
          <div href="#" className="nav-link text-light">
            {/* {this.login ? (
            <span>Hello! {this.userName}</span>
          ) : (
            <button>Login</button>
          )} */}
            {this.renderLogin()}
          </div>
        </nav>
        <p
          style={{
            backgroundColor: "red",
            color: "white",
            margin: "15px",
            padding: "10px",
          }}
        >
          This is inline-style CSS
        </p>
        <hr />
        <BaiTapState />
      </div>
    );
  }
}
