import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const DemoCategory = () => {
  //set state cho cate
  const [arrCategory, setArrCategory] = useState([]);
  //set state product
  const [arrProduct, setArrProdcut] = useState([]);
  //set state cate chọn
  const [categoryId, setCategoryId] = useState(null);

  //method get cate
  const getAllCate = async () => {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product/getAllCategory",
      method: "GET",
    });
    setArrCategory(result.data.content);
  };
  useEffect(() => {
    getAllCate();
    return () => {
      console.log("componentWillUnmount");

      /**
       * callback mà cá useEffect return sẽ thực thi khi
       * + Component mất khỏi react DOM (vd: chuyển hướng trang hoặc if else...)
       * +
       */
    };
  }, []);
  //method get product by cate Id
  const getAllProductByCate = async (id) => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${id}`,
      method: "GET",
    });
    setArrProdcut(result.data.content);
  };
  //useEffect case 3: chỉ chạy khi có thay đổi
  useEffect(() => {
    if (categoryId) {
      //Call API when change and !== null
      getAllProductByCate(categoryId);
    } // cách sử dụng hàm này tương tự như componentDiđUpate -> sử dụng khi cần thực hiện 1 logic nào đó bởi 1 state thay đổi

    return () => {
      console.log("componentWillUnmount");
      /**
       * Callback mà các use effect sẽ thực thi khi dependency thay đổi giá trị
       */
    };
  }, [categoryId]); // Cái xác định thay đổi

  return (
    <div className="container mt-5">
      <div className="d-flex">
        <div className="w-25">
          <nav className="d-flex flex-column mt-5">
            {arrCategory.map((item, index) => {
              return (
                <a
                  className="mt-2 nav-link"
                  href="#"
                  key={index}
                  onClick={() => {
                    setCategoryId(item.id);
                  }}
                >
                  {item.category}
                </a>
              );
            })}
          </nav>
        </div>
        <div className="w-75">
          <h3>Product list</h3>
          <div className="row">
            {arrProduct.map((item, index) => {
              return (
                <div className="col-4" key={index}>
                  <div className="card p-2">
                    <img src={item.image} alt="..." />
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <button className="btn btn-danger">
                      <i className="fas fa-cart-plus s"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCategory;
