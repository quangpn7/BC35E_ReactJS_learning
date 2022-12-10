import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const DemoUseSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  //Arr stores result
  const [arrProduct, setArrProduct] = useState([]);
  let keyword = searchParams.get("keyword");
  const frm = useFormik({
    initialValues: {
      keyword: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setSearchParams({
        keyword: values.keyword,
      });
    },
  });
  //call api
  const getProductByKeyword = async () => {
    if (keyword) {
      const result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
        method: "GET",
      });
      console.log(result.data.content);
      setArrProduct(result.data.content);
    }
  };
  useEffect(() => {
    //call API
    getProductByKeyword();
  }, [keyword]);
  return (
    <div className="container">
      <h3>Search</h3>
      <form
        className="form-group w-25 border shadow p-2"
        onSubmit={frm.handleSubmit}
      >
        <p>Input product's name</p>
        <div className="d-flex">
          <input
            type="text"
            className="form-control"
            name="keyword" //IMPORTANT
            onChange={frm.handleChange}
          />
          <button className="btn btn-lg btn-success m-2">Search</button>
        </div>
      </form>
      <h3 className="m-2">Result ({arrProduct.length})</h3>
      <div className="row g-3">
        {arrProduct?.map((item) => {
          const { name, image, price, id } = item;
          return (
            <div className="col-3" key={id}>
              <div className="card">
                <img src={image} alt="..." className="w-100" />
                <div className="card-body">
                  <p className="fw-bold">{name}</p>
                  <p className="text-danger fw-bold">$ {price}</p>
                  <NavLink to={`/detail/${id}`} className="btn btn-primary">
                    View detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DemoUseSearchParams;
