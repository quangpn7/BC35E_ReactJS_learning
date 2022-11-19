import React, { Component } from "react";
import { connect } from "react-redux";
class DemoFontSize extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Demo tăng giảm fontSize</h3>
        <p style={{ fontSize: this.props.fSize }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          exercitationem aliquid unde dignissimos nobis quia recusandae dolor
          libero? Consequatur nam libero harum repudiandae minima deleniti ad
          tenetur nulla, dolores qui esse eveniet ipsam praesentium quae facere
          neque officia veritatis mollitia veniam ea. Dolorum ut, amet similique
          cum assumenda maiores veritatis!
        </p>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            //format gửi lên redux (action)
            const action = {
              type: "TANG_GIAM_FONTSIZE", // Nhãn để biết thay đổi state nào
              payload: 1,
            }; //Gửi giá trị dữ liệu lên redux
            //dùng próp.dispatch để đưa action lên redux
            this.props.dispatch(action);
          }}
        >
          +
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            const action = { type: "TANG_GIAM_FONTSIZE", payload: -1 };
            this.props.dispatch(action);
          }}
        >
          -
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fSize: state.fontSize,
  };
};

const ComponentRedux = connect(mapStateToProps)(DemoFontSize);
export default ComponentRedux;
