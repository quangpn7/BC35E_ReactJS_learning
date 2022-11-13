import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    //6. Tạo template cho mỗi sp
    const { thumbnail, title, price } = this.props.product;
    return (
      <div id="card" className="card shadow rounded-4 bg-body">
        <img src={thumbnail} alt="" className="card-img" height={250} />
        <div className="card-body">
          <h3 className="card-title text-truncate">{title}</h3>
          <p className="card-text text-danger fs-4 badge badge-rounded bg-warning">
            ${price}
          </p>
          <br />
          <button className="btn btn-lg btn-success">Detail</button>
          {/* <p className="card-text">{description}</p> */}
        </div>
      </div>
    );
  }
}
