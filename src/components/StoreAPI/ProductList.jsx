import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    const { products } = this.props;
    // 5. Tạo giao diện cho list
    return (
      <div className="row g-5">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-4">
              {/* Truyền obj product xuống PI */}
              <ProductItem product={product} />
            </div>
          );
        })}
      </div>
    );
  }
}
