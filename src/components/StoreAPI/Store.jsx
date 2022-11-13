import React, { Component } from "react";
import axios from "axios";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

export default class Store extends Component {
  //1. tạo state
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      searchTerm: "",
      category: "",
    };
  }
  //2. Tạo fnc get API
  fecthProducts = async () => {
    // 11
    let url = "https://dummyjson.com/products";
    if (this.state.searchTerm) {
      url += `/search?q=${this.state.searchTerm}`;
    } else if (this.state.category) {
      url += `/category/${this.state.category}`;
    }
    try {
      const response = await axios.get(url);
      //Call API thành công
      //setState
      this.setState({ products: response.data.products });
    } catch (error) {
      console.log(error);
    }
  };
  //DidMount autorun khi vào component
  componentDidMount() {
    //3. Sử dụng hàm vào hàm này
    this.fecthProducts();
  }
  //11. Tạo didUpdate để trigger lại state-> render
  //Phần này rất quan trọng vì khi update lại state thì nó chưa render lại

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchTerm !== this.state.searchTerm ||
      prevState.category !== this.state.category
    ) {
      this.fecthProducts();
    }
  }
  //8.
  handleSearch = (searchTerm) => {
    console.log(searchTerm);
    //Key và value giống nhau nên có thể viết nfgắn gọn
    //10. nhận vào giá trị
    this.setState({ searchTerm, category: "" });
  };
  handleChangeCategory = (category) => {
    //Giôngs nhay về key và para nên có thể viết tắt
    this.setState({ category, searchTerm: "" });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary my-4">CyberPhone Strore</h1>
        <div className="row">
          <div className="col-3">
            {/* 9 */}
            <ProductFilter
              onSearch={this.handleSearch}
              onChangeCategory={this.handleChangeCategory}
            />
          </div>
          <div className="col-9">
            {/* 4. Truyền data từ state xuống PL */}
            <ProductList products={this.state.products} />
          </div>
        </div>
      </div>
    );
  }
}
