//Snippet: Redux
//Xoá chữ export nơi tạo class và xoá hàm mapDispatchToProps
import React, { Component } from "react";
import { connect } from "react-redux";
class DemoChonXe extends Component {
  handleChangeColor = (color) => {
    let newImgSrc = `img/${color}-car.jpg`;

    const action = {
      type: "SELECT_CAR",
      payload: newImgSrc,
    };
    this.props.dispatch(action);
  };
  render() {
    console.log(this.props);
    let { imgSrc } = this.props;
    return (
      <div>
        <hr />
        <h3>Demo chọn xe</h3>
        <div className="row">
          <div className="col-6">
            <img src={imgSrc} alt="" width={"100%"} />
          </div>
          <div className="col-6">
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                this.handleChangeColor("red");
              }}
            >
              Red
            </button>
            <button
              className="btn btn-secondary mx-2"
              onClick={() => {
                this.handleChangeColor("steel");
              }}
            >
              Steel
            </button>
            <button
              className="btn btn-dark mx-2"
              onClick={(e) => {
                this.handleChangeColor("black");
              }}
            >
              Black
            </button>
            <button
              className="btn btn-white border mx-2"
              onClick={() => {
                this.handleChangeColor("Silver");
              }}
            >
              Silver
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imgSrc: state.imgSrc,
});

export default connect(mapStateToProps)(DemoChonXe);
