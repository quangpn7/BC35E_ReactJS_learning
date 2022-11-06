import { type } from "@testing-library/user-event/dist/type";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";

export default class FormCreateProduct extends Component {
  state = {
    values: {
      id: "",
      name: "",
      price: "",
      image: "",
      description: "",
    },
    errors: {
      id: "",
      name: "",
      price: "",
      image: "",
      description: "",
    },
    inValid: true,
  };
  checkValid = () => {
    //form hợp lệ khi valúe !== "" và erro = ""

    let { values, errors } = this.state;
    for (let key in errors) {
      if (errors[key] !== "" || values[key] === "") {
        return false;
      }
    }
    return true;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  handleInputChange = (e) => {
    //Properties: value, id, style, innerHTML
    //Attribute: là thuộc tính tự thêm
    let dataAttrRegex = e.target.getAttribute("data-regex");
    console.log(dataAttrRegex);
    //Get id, value of element doing call
    let { value, id } = e.target;

    //handle value
    let newValues = this.state.values;
    newValues[id] = value;
    //handle error
    let newErrors = this.state.errors;
    let messError = "";
    if (value.trim() === "") {
      messError = id + " cannot be blank";
    } else {
      //CÁCH 1
      if (dataAttrRegex) {
        let regex = new RegExp(dataAttrRegex);
        if (!regex.test(value)) {
          messError = id + " is in valid";
        }
      }
      //CÁCH 2 - Về nhà xem video
    }
    newErrors[id] = messError;

    this.setState(
      {
        values: newValues,
        errors: newErrors,
      },
      () => {
        //sau khi xu ly oxng error
        let valid = !this.checkValid();
      }
    );
    // let { id, value } = e.target;
    // this.setState(
    //   {
    //     [id]: value, // Id ở đây là giát trị từ thuộc tính từ target
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );
  };
  render() {
    return (
      <form className="container mt-3" onSubmit={this.handleSubmit}>
        <h3>Create Product</h3>
        <div className="card">
          <h3 className="card-header">Product Info</h3>
          <div className="card-boy row container">
            <div className="col-6">
              <div className="form-group">
                <p>ID</p>
                <input
                  className="form-control"
                  id="id"
                  name="id"
                  onInput={this.handleInputChange}
                />
                {this.state.errors.id !== "" && (
                  <div className="alert alert-danger mt-2">
                    {this.state.errors.id}
                  </div>
                )}
              </div>
              <div className="form-group">
                <p>Name</p>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  onInput={this.handleInputChange}
                />
                {this.state.errors.name !== "" && (
                  <div className="alert alert-danger mt-2">
                    {this.state.errors.name}
                  </div>
                )}
              </div>
              <div className="form-group">
                <p>Price</p>
                <input
                  data-regex="/^\d+$/"
                  className="form-control"
                  id="price"
                  name="price"
                  onInput={this.handleInputChange}
                />
                {this.state.errors.price !== "" && (
                  <div className="alert alert-danger mt-2">
                    {this.state.errors.price}
                  </div>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Image</p>
                <input
                  className="form-control"
                  id="image"
                  name="image"
                  onInput={this.handleInputChange}
                />
                {this.state.errors.image !== "" && (
                  <div className="alert alert-danger mt-2">
                    {this.state.errors.image}
                  </div>
                )}
              </div>
              <div className="form-group">
                <p>Product type</p>
                <select
                  className="form-control"
                  id="productType"
                  onChange={this.handleInputChange}
                >
                  <option value={"phone"}>Phone</option>
                  <option value={"tablet"}>Tablet</option>
                  <option value={"laptop"}>Latop</option>
                </select>
              </div>
              <div className="form-group">
                <p>Description</p>
                <input
                  className="form-control"
                  id="description"
                  name="description"
                  onInput={this.handleInputChange}
                />
                {this.state.errors.description !== "" && (
                  <div className="alert alert-danger mt-2">
                    {this.state.errors.description}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-success" disabled={this.state.inValid}>
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}
