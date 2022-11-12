import React, { Component } from "react";

export default class Children extends Component {
  //Được chạy mỗi khi state/próp thay đổi và chạy trước phương thức render
  //Nếu return về false => không có phép chạy phương thức render
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.userId !== this.props.userId) {
      return true;
    }
    return false;
  }
  render() {
    const { userId } = this.props;
    console.log("Children Run");
    return (
      <div>
        <h1>Children - {userId}</h1>
      </div>
    );
  }
}
