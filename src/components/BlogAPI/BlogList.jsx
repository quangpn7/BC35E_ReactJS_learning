import React, { Component } from "react";
import BlogItem from "./BlogItem";

export default class BlogList extends Component {
  render() {
    const { blogPost, viewDetail, handleUserFilter } = this.props;

    return (
      <div className="row g-4">
        {/* If there is not empty response, it will map the data and create elemet */}
        {blogPost.length !== 0 ? (
          blogPost.map((post) => {
            return (
              <div className="col-4" key={post.id}>
                <BlogItem
                  blogPost={post}
                  viewDetail={viewDetail}
                  handleUserFilter={handleUserFilter}
                />
              </div>
            );
          })
        ) : (
          // Otherwise, if there is no post, it will return "No post found!!"
          <h1 className="text-center mt-5 fst-italic text-secondary">
            No post found !!!
          </h1>
        )}
      </div>
    );
  }
}
