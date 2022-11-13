import React, { Component, PureComponent } from "react";
//Pure component: tự giúp comp xử lý phương thức shouldComponentUpdate
// Nó sẽ so sánh toàn bộ props và state hiện tại với props và state mới, nếu không có thay đổi thì nó sẽ không render lại component.
// Tuy nhiên PureComponent không thể so sánh các giá trị tham chiếu như array hay obj. Còn đối với Comp thông thường và should thì react sẽ so sánh được

export default class Children extends PureComponent {
  //Được chạy mỗi khi state/próp thay đổi và chạy trước phương thức render
  //Nếu return về false => không có phép chạy phương thức render
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.userId !== this.props.userId) {
  //     return true;
  //   }
  //   return false;
  // }
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
