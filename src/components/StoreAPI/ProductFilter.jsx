import React, { Component } from "react";
import axios from "axios";

export default class ProductFilter extends Component {
  //8. Tạo state cho filter tìm kiếm
  constructor(props) {
    super(props);

    this.state = {
      //12. Tạo state cate
      categories: [],
      searchTerm: "",
    };
  }
  //13. Taọ hàm fetch cate
  fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );

      this.setState({ categories: response.data });
    } catch (error) {
      console.log(error);
    }
  };
  //14.
  componentDidMount() {
    this.fetchCategories();
  }
  //10. Viết hàm xử lý sự kiện change input
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    //7. Tạo search filter
    return (
      <div>
        <div className="mb-3 d-flex">
          <input
            className="form-control"
            placeholder="Search..."
            // 9. Truyền cho value này một state
            value={this.props.searchTerm}
            //Xử lý hàm khi change
            onChange={this.handleChange}
          ></input>
          <button
            className="btn btn-primary ms-2"
            // 10
            onClick={() => {
              this.props.onSearch(this.state.searchTerm);
            }}
          >
            Search
          </button>
        </div>
        {/* 15 */}
        <div className="mb-3">
          <select
            className="form-select"
            onChange={(e) => {
              this.props.onChangeCategory(e.target.value);
            }}
          >
            <option value="">Select</option>
            {this.state.categories.map((cate, index) => {
              return (
                <option key={index} value={cate}>
                  {cate}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}
