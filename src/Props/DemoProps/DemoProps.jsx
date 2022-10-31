import React, { Component } from "react";
import Card from "./Card";
import Car from "./Car";
const arrProduct = [
  { id: 1, name: "red car", img: "./img/red-car.jpg", price: 1000 },
  { id: 2, name: "black car", img: "./img/black-car.jpg", price: 2000 },
  { id: 3, name: "silver car", img: "./img/silver-car.jpg", price: 3000 },
  { id: 4, name: "steel car", img: "./img/steel-car.jpg", price: 4000 },
];
/*
    SỰ KHÁC NHAU GIỮA this.state và this.props
    
    -Giống: đều là thuộc tính có sãn từ react class component. Dùng để binding dữ liệu lên giao diện

    -Khác: 
        +State dùng để chứ dữ liệu thay đổi trên giao diện và có thể gán lại được thông qua phương thức setState.
        +Props dùng để nhận dữ nhiệu từ component cha truyền vào và không được gán lại giá trị đó

*/

export default class DemoProps extends Component {
  renderCar = () => {
    return arrProduct.map((car, index) => {
      return (
        <div className="col-3 mt-2" key={index}>
          <Car prod={car} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center mt-2">Car List</h3>
        <div className="row mt-2">{this.renderCar()}</div>
      </div>
    );
  }
}
