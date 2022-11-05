import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    const { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
    return (
      <div>
        <div className="card mt-5">
          <div className="card-header">Giỏ hàng</div>
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Mã sản phẩm</th>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá bán</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {gioHang.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.maSP}</td>
                      <td>
                        <img
                          src={item.hinhAnh}
                          width={50}
                          height={50}
                          alt="..."
                        />
                      </td>
                      <td>{item.tenSP}</td>
                      <td>{item.giaBan.toLocaleString()}</td>
                      <td>
                        <button
                          className="btn btn-success me-2"
                          onClick={() => {
                            tangGiamSoLuong(item.maSP, -1);
                          }}
                        >
                          -
                        </button>
                        {item.soLuong}
                        <button
                          className="btn btn-success ms-2"
                          onClick={() => {
                            tangGiamSoLuong(item.maSP, 1);
                          }}
                        >
                          +
                        </button>
                      </td>
                      <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            xoaGioHang(item.maSP);
                          }}
                        >
                          Del
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
