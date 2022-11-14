import React, { Component } from "react";

export default class BlogFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchKey: "",
    };
  }
  handleSearchChange = (e) => {
    this.setState({ searchKey: e.target.value });
  };
  render() {
    // const { handleSearch } = this.props.handleSearch;
    return (
      <div className="wrap container">
        <div className="mb-2 d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search..."
            value={this.state.searchKey}
            onChange={this.handleSearchChange}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              this.props.handleSearch(this.state.searchKey);
            }}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
