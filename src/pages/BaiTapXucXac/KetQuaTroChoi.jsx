import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    const { diemCuoc, totalWin, played } = this.props;
    return (
      <div className="text-center mt-5 ">
        <div className="display-4">
          <span>Bạn đặc cược: </span>
          <span className="text-danger">{diemCuoc ? "Tài" : "Xỉu"}</span>
        </div>
        <div className="display-4">
          <span>Tổng số bàn thắng: </span>
          <span className="text-primary">{totalWin}</span>
        </div>
        <div className="display-4">
          <span>Tổng số bàn cược: </span>
          <span className="text-warning">{played}</span>
        </div>
        <div className="display-4">
          <button
            className="btn btn-success p-3"
            onClick={() => {
              const action = {
                type: "PLAY_GAME",
              };
              this.props.dispatch(action);
            }}
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  diemCuoc: state.baiTapXucXacReducer.diemCuoc,
  totalWin: state.baiTapXucXacReducer.totalWin,
  played: state.baiTapXucXacReducer.played,
});

export default connect(mapStateToProps)(KetQuaTroChoi);
