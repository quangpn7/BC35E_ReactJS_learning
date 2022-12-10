import React from "react";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const DemoUseParams = () => {
  const [productDetail, setProductDetail] = useState({});

  const params = useParams(); // lấy params

  const getProductById = async (id) => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: "GET",
    });
    console.log(result.data.content);
    setProductDetail(result.data.content);
  };

  useEffect(() => {
    getProductById(params.id);
  }, [params.id]); // call API
  const { price, name, image, relatedProducts, description } = productDetail;
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-4">
          <img src={image} alt="..." className="w-100" />
        </div>
        <div className="col-8">
          <h3>{name}</h3>
          <p>{description}</p>
          <p className="text-danger fw-bold display-6">$ {price}</p>
          <button className="btn-lg btn btn-danger px-5">Buy</button>
        </div>
      </div>
      <h3 className="text-center mt-5">Related Product</h3>
      <div className="row">
        {relatedProducts?.map((item, index) => {
          //Optional chaining
          return (
            <div className="col-4" key={index}>
              <div className="card">
                <img src={item.image} alt="..." />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <NavLink
                    to={`/detail/${item.id}`}
                    className="btn btn-success"
                  >
                    View detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="col-4">
          <div className="card">
            <img src="https://i.pravatar.cc?u=1" alt="..." />
            <div className="card-body">
              <h3>Product name</h3>
              <p>1000</p>
              <NavLink to="/detail/2" className="btn btn-success">
                View detail
              </NavLink>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DemoUseParams;
