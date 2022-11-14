import React, { Component } from "react";

export default class BlogItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: false,
    };
  }
  getFullTitle = () => {
    if (this.state.title === false) {
      this.setState({
        title: true,
      });
    } else {
      this.setState({
        title: false,
      });
    }
  };
  componentDidUpdate() {}
  render() {
    const { title, body, userId } = this.props.blogPost;
    let imgUrl = `https://i.pravatar.cc/300?img=${userId}`;

    return (
      <div className="card">
        <div className="card-img overflow-hidden">
          <img src={imgUrl} alt="" className="w-100" />
        </div>
        <div className="card-body ">
          <h3
            role="button"
            className={`user-select-none  ${
              this.state.title === true ? "" : "text-truncate"
            } `}
            onClick={this.getFullTitle}
          >
            {title}
          </h3>
          <span
            role="button"
            className="badge badge-rounded bg-primary mb-3 text-decoration-none"
            onClick={() => {
              this.props.handleUserFilter(userId);
            }}
          >
            Author: {userId}
          </span>
          <p>{body.length >= 50 ? body.substring(0, 50) + "..." : body}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.viewDetail(this.props.blogPost, imgUrl);
            }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Read more
          </button>
        </div>
      </div>
    );
  }
}
