import React, { Component } from "react";

export default class Car extends Component {
  render() {
    const { img, name, id, price } = this.props.prod;

    return (
      <div className="card">
        <img src={img} alt="" />
        <div className="card-body bg-dark text-white">
          <h3>{name}</h3>
          <p>{price}</p>
          <p></p>
        </div>
      </div>
    );
  }
}
