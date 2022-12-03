import React, { Component } from "react";
import { connect } from "react-redux";
import { datCuocAction } from "../../redux/actiionReducer/baiTapGameAction";

class XucXac extends Component {
  renderResult = () => {
    let diem = 0;
    for (let dice of this.props.arrDice) {
      diem += dice.value;
    }
    let result = diem > 11 ? "Tài" : "Xỉu";
    return `${diem} - ${result}`;
  };
  render() {
    const { arrDice } = this.props;

    return (
      <div className="container-fluid">
        <div className="row text-center pt-5">
          <div className="col-4">
            <button
              className="btn"
              onClick={() => {
                const action = datCuocAction(true);
                this.props.dispatch(action);
              }}
            >
              <div className="p-5 bg-danger text-white rounded display-5">
                Tài
              </div>
            </button>
          </div>
          <div className="col-4">
            {arrDice.map((dice, index) => {
              return (
                <img
                  className="mx-2"
                  key={index}
                  src={dice.img}
                  width={100}
                  height={100}
                  alt="..."
                />
              );
            })}
            {/* <img src="./img/1.png" alt="..." width={100} height={100} />
            <img
              className="mx-2"
              src="./img/1.png"
              alt="..."
              width={100}
              height={100}
            />
            <img src="./img/1.png" alt="..." width={100} 
            height={100} /> */}
            <div className="display-5 pt-3 text-light">
              {this.renderResult()}
            </div>
          </div>
          <div className="col-4">
            <button
              className="btn"
              onClick={() => {
                const action = datCuocAction(false);
                this.props.dispatch(action);
              }}
            >
              <div className="p-5 bg-warning text-white rounded display-5">
                Xỉu
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrDice: state.baiTapXucXacReducer.arrDice,
});

export default connect(mapStateToProps)(XucXac);
