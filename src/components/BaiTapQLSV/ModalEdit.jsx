import React, { Component } from "react";

export default class ModalEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      fullName: "",
      phone: "",
      email: "",
    };
  }

  render() {
    console.log(this.props.editSv);
    return (
      <div>
        <div>
          {/* Button trigger modal */}
          {/* <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button> */}
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Chỉnh sửa thông tin Sinh Viên
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="row gy-3">
                    <div className="col-6">
                      <label htmlFor="msSV">Mã SV</label>

                      <input
                        type="text"
                        id="idField"
                        className="form-control"
                        disabled
                        value={this.state.id}
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
                        value={this.props.editSv.fullName}
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

                  <button
                    className="btn btn-warning mt-3"
                    onClick={() => {
                      // handleUpdate(this.state);
                    }}
                  >
                    Update
                  </button>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
