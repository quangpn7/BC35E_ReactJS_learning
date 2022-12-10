import React, { Component } from "react";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const { data, error, loading } = useFetch(
    `https://shop.cyberlearn.vn/api/Product`
  );
  return (
    <div className="container">
      <div className="loading" style={{ display: loading ? "flex" : "none" }}>
        <div className="display-4">Loading...</div>
      </div>
      <h3>Product list</h3>
      <div className="row">
        {data?.content.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card">
                <img src={item.image} alt="" />
                <div className="card-body">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
