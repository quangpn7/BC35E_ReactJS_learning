import React, { Component } from "react";

export default class PhoneComponent extends Component {
  render() {
    const { phone, renderDetail } = this.props;
    return (
      <div className="card">
        <img src={phone.hinhAnh} alt="" height={350} />
        <div className="card-body">
          <h3>{phone.tenSP}</h3>
          <p>{phone.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              renderDetail(phone);
            }}
          >
            View
          </button>
        </div>
      </div>
    );
  }
}
