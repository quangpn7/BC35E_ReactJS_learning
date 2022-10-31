import React, { Component } from "react";

export default class ChildrenComponent extends Component {
  render() {
    return (
      <div>
        <h3>Title: Nhut Quang</h3>
        <p>Xem bai tap chi tiet</p>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
