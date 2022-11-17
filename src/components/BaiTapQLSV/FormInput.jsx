import React, { Component } from "react";

export default class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      fullName: "",
      phone: 0,
      email: "",
    };
  }

  render() {
    const { handleInput } = this.props;
    let { editFlag } = this.props;

    return (
      <div>
        <div className="row gy-3">
          <div className="col-6">
            <label htmlFor="msSV">Mã SV</label>
            <input
              type="text"
              onChange={(e) => {
                this.setState({
                  id: e.target.value,
                });
              }}
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label htmlFor="hoTen">Họ tên</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                this.setState({
                  fullName: e.target.value,
                });
              }}
            />
          </div>
          <div className="col-6">
            <label htmlFor="phone">Số điện thoại</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => {
                this.setState({
                  phone: e.target.value,
                });
              }}
            />
          </div>
          <div className="col-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => {
                this.setState({
                  email: e.target.value,
                });
              }}
            />
          </div>
        </div>
        {editFlag === true ? (
          <button className="btn btn-warning mt-3">Update</button>
        ) : (
          <button
            className="btn btn-success mt-3"
            onClick={() => {
              handleInput(this.state);
            }}
          >
            Thêm sinh viên
          </button>
        )}
      </div>
    );
  }
}
