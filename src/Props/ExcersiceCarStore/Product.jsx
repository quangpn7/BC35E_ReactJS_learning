import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { item, viewDetail } = this.props;
    return (
      <div className="card mt-5">
        <img className="card-img-top" src={item.img} />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">{item.price}</p>
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalId"
            onClick={() => {
              viewDetail(item);
            }}
          >
            Detail
          </button>
        </div>
      </div>
    );
  }
}
