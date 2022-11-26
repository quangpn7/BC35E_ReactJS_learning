import React, { Component } from "react";
import { connect } from "react-redux";
import KetQuaTroChoi from "./KetQuaTroChoi";
import XucXac from "./XucXac";
import "./BaiTapXucXac.css";

class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div className="bg-game">
        <h3 className="display-4 text-center pt-5">Bài tập Game Xúc xắc</h3>
        <XucXac />
        <KetQuaTroChoi />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(BaiTapGameXucXac);
