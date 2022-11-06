import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import GioHang from "./GioHang";

export default class BaiTapGioHang extends Component {
  state = {
    gioHang: [],
  };
  themGioHang = (spClick) => {
    let spThem = { ...spClick, soLuong: 1 };
    let gioHang = this.state.gioHang;
    //Checka if exised

    let spCheck = gioHang.find((sp) => sp.maSP === spClick.maSP);
    if (spCheck) {
      spCheck.soLuong = spCheck.soLuong + 1;
    } else {
      gioHang.push(spThem);
    }
    //UPDATE STATE
    this.setState({
      gioHang: gioHang,
    });
  };
  xoaGioHang = (maSPclick) => {
    let gioHang = this.state.gioHang;
    // let index = gioHang.findIndex((sp) => sp.maSP === maSPclick);
    // if (index !== -1) {
    //   gioHang.splice(index, 1);
    // }
    let newGioHang = gioHang.filter((sp) => sp.maSP !== maSPclick);

    this.setState({
      gioHang: newGioHang,
    });
  };
  tangGiamSoLuong = (maSP, soLuong) => {
    //find selceted product from cart
    let gioHang = this.state.gioHang;
    let spGH = gioHang.find((sp) => sp.maSP === maSP);

    if (spGH) {
      spGH.soLuong += soLuong;
      if (spGH.soLuong <= 0) {
        if (window.confirm("You sure?")) {
          this.xoaGioHang(maSP);
          return;
        }
        spGH.soLuong -= soLuong;
      }
    }
    this.setState({
      gioHang: gioHang,
    });
  };
  render() {
    return (
      <div className="container">
        <GioHang
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        ></GioHang>
        <DanhSachSanPham themGioHang={this.themGioHang}></DanhSachSanPham>
      </div>
    );
  }
}
