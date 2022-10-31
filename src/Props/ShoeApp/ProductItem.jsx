import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { name, price, image, description } = this.props.item;

    return (
      <div className="card mt-2" style={{ height: "530px" }}>
        <img src={image} alt="" />
        <div className="card-body overflow-hidden">
          <h3 style={{ width: "400px" }}>{name}</h3>
          <p>
            {description.length > 60
              ? description.substring(0, 60) + "..."
              : description}
          </p>
          <p>
            <b>$ {price}</b>
          </p>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    );
  }
}
