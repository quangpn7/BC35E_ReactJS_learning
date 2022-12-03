import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const UseEffectDemo = () => {
  const [number, setNumber] = useState(1);

  const [arrProduct, setArrProduct] = useState([]);
  //Call API
  const getAllProduct = async () => {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    setArrProduct(result.data.content);
  };
  console.log("render");
  // Case 1: hàm chạy liên tục khi state change
  useEffect(() => {
    console.log("This useEffectRun everytime change state value");
  });
  //Case 2: Khi muốn sử dụng useEffect 1 lần khi chạy app như componentDidMount, thêm tham số thứ 2 (depedencyList) là một mãng rống -> thường dùng để call API
  useEffect(() => {
    console.log("didMount");
    getAllProduct();
  }, []);
  //Case 3:

  return (
    <div className="container">
      <h3>Number: {number}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <hr />
      <h3>Product List</h3>
      <div className="row">
        {arrProduct.map((item, index) => {
          return (
            <div className="col-4 mt-2" key={index}>
              <div className="card">
                <img src={item.image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseEffectDemo;
