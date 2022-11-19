import React, { Component } from "react";

export default class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      fullName: "",
      phone: "",
      email: "",
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.editSv !== this.props.editSv) {
      this.setState({
        id: this.props.editSv.id,
        fullName: this.props.editSv.fullName,
        phone: this.props.editSv.phone,
        email: this.props.editSv.email,
      });
    }
  }

  render() {
    const { handleInput, update, handleUpdate, editSv } = this.props;
    return (
      <div>
        <div className="row gy-3">
          <div className="col-6">
            <label htmlFor="msSV">Mã SV</label>
            {update === true ? (
              <input
                type="text"
                id="idField"
                onChange={(e) => {
                  this.setState({
                    id: e.target.value,
                  });
                }}
                className="form-control"
                disabled
                value={this.state.id}
              />
            ) : (
              <input
                type="text"
                id="idField"
                onChange={(e) => {
                  this.setState({
                    id: e.target.value,
                  });
                }}
                className="form-control"
                value={this.state.id}
              />
            )}
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
              defaultValue={editSv.fullName}
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
              value={this.state.phone}
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
              value={this.state.email}
            />
          </div>
        </div>
        {update === true ? (
          <button
            className="btn btn-warning mt-3"
            onClick={() => {
              handleUpdate(this.state);
            }}
          >
            Update
          </button>
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
