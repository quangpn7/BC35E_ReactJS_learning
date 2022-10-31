import React, { Component } from "react";

export default class BaiTapState extends Component {
  state = {
    fz: 20, //default
  };
  render() {
    return (
      <div className="container">
        <h3>Tăng giảm fz</h3>
        <p style={{ fontSize: `${this.state.fz}px` }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          nesciunt labore dicta tenetur iste dolorum nisi, ullam totam
          consequatur nemo fugit dolore sequi temporibus nam, voluptates
          corporis, repellat aperiam velit. Repudiandae eligendi commodi in
          doloremque, reiciendis, quisquam facilis architecto eius distinctio
          sit maiores voluptate minus praesentium. Est mollitia officiis non.
        </p>
        <button
          className="btn btn-success ms-2"
          onClick={() => {
            this.setState({
              fz: this.state.fz + 5,
            });
          }}
        >
          +
        </button>
        <button
          className="btn btn-success ms-2"
          onClick={() => {
            this.setState({
              fz: this.state.fz - 5,
            });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
