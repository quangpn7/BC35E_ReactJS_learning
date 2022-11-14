import React, { Component } from "react";
import axios from "axios";
import BlogFilter from "./BlogFilter";
import BlogList from "./BlogList";
import BlogModal from "./BlogModal";
import "./blogStyle.css";

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogPost: [],
      blogDetail: {
        id: "",
        title: "",
        userId: "",
        tags: [],
      },
      authorImgUrl: "",
      searchField: "",
      authorFilter: "",
    };
  }

  //GET API method
  fetchBlogPost = async () => {
    let url = "https://dummyjson.com/posts";
    if (this.state.searchField) {
      url += `/search?q=${this.state.searchField}`;
    } else if (this.state.authorFilter) {
      url += `/user/${this.state.authorFilter}`;
    }
    try {
      const response = await axios.get(url);
      //After done calling API, set State
      if (response.data.posts !== []) {
        this.setState({
          blogPost: response.data.posts,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //Modal detail post
  viewDetail = (postClick, imgUrl) => {
    this.setState({
      blogDetail: postClick,
      authorImgUrl: imgUrl,
    });
  };
  //Use componentDidMount to fetch the API at first load
  componentDidMount() {
    this.fetchBlogPost();
  }
  //Use componentDidUpdate to fetch the api after update
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchField !== this.state.searchField) {
      this.fetchBlogPost();
    } else if (prevState.authorFilter !== this.state.authorFilter) {
      this.fetchBlogPost();
    }
  }
  //Handle search
  handleSearch = (searchKey) => {
    this.setState({
      searchField: searchKey,
      authorFilter: "",
    });
  };
  //handle filter user
  handleUserFilter = (userId) => {
    this.setState({
      authorFilter: userId,
      searchField: "",
    });
  };

  render() {
    return (
      <div className="container mt-5 blog">
        <h1 className="text-center mb-5">BLOG API</h1>
        <div className="row g-3">
          <div className="blog__filter col-3">
            <BlogFilter handleSearch={this.handleSearch} />
          </div>
          <div className="blog__list col-9">
            <BlogList
              blogPost={this.state.blogPost}
              viewDetail={this.viewDetail}
              handleUserFilter={this.handleUserFilter}
            />
          </div>
        </div>
        <BlogModal
          detailBlog={this.state.blogDetail}
          img={this.state.authorImgUrl}
        />
      </div>
    );
  }
}
