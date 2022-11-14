import axios from "axios";
import React, { Component } from "react";

export default class BlogModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postCommentsId: "",
    };
  }
  //Get comment
  fetchComment = async () => {
    let url = "https://dummyjson.com/posts/";
    if (this.state.postCommentsId !== "") {
      url += `/${this.state.postCommentsId}/comments`;
    }

    try {
      const response = await axios.get(url);
      this.setState({
        postCommentList: response.data.comments[0],
        postCommentUser: response.data.comments[0].user,
      });
    } catch (error) {}
  };
  componentDidMount() {
    this.fetchComment();
  }
  //handle changeModal comment
  handlePostIdChange = (postIdChosen) => {
    this.setState({
      postCommentsId: postIdChosen,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.postCommentsId !== this.state.postCommentsId) {
      this.fetchComment();
    }
  }

  render() {
    const { id, title, body, userId, tags } = this.props.detailBlog;

    return (
      <div>
        <div>
          {/* Button trigger modal */}
          {/* <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button> */}
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title" id="exampleModalLabel">
                    {id}. {title}
                  </h1>

                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="row container mt-3">
                  <div className="col-4">
                    <img
                      src={this.props.img}
                      alt=""
                      className="w-100 rounded-3"
                    />
                  </div>
                  <div className="col-8">
                    <h3>By: user_{userId}</h3>
                    <p>
                      Tags:{" "}
                      {tags.map((tag, index) => {
                        return (
                          <span
                            role="button"
                            className="text-decoration-none text-primary"
                            href="#"
                            key={index}
                          >
                            {tag} <span>, </span>
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="modal-body mt-3 container">
                  <p className="mainModal_txt">{body}</p>
                  <p className="text-end fw-bold fst-italic me-5">
                    ~Author: {userId}~
                  </p>
                </div>

                <div className="modal-footer d-flex">
                  <button
                    className="btn btn-success me-3"
                    onClick={() => {
                      this.handlePostIdChange(id);
                    }}
                  >
                    See comments
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
