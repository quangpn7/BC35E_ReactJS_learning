import React, { Component } from "react";
import axios from "axios";
export default class LifeCycleD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  fecthData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`, {
        params: {
          userId: this.state.userId,
        },
      })
      .then((response) => {
        this.setState({
          posts: response.data,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    console.log("DidMount");
    this.fecthData();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("DiđUpate");

    if (prevState.posts.length !== this.state.posts.length) {
      this.fecthData();
    }
  }
  render() {
    return <div>Test</div>;
  }
}
