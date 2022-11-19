import React, { Component } from "react";
import DemoChonXe from "./DemoChonXe";
import DemoFontSize from "./DemoFontSize";
import QuanLyUser from "./QuanLyUser/QuanLyUser";

export default class ReduxDemo extends Component {
  render() {
    return (
      <div className="container">
        <DemoFontSize />
        <DemoChonXe />
        <QuanLyUser />
      </div>
    );
  }
}
