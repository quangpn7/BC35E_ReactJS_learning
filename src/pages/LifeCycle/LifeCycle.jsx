import React, { Component } from "react";
import axios from "axios";
import Children from "./Children";
export default class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      //Tạo state post để chứ id của user muốn filter ra
      userId: null,
    };

    console.log("constructor run");
  }
  fecthPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`, {
        params: {
          userId: this.state.userId,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          posts: response.data,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // FEATURE: DO SOME FUNCITON ONLOAD: api,setTimeOut, setState,....run one time after render
  componentDidMount() {
    this.fecthPosts();
    console.log("componentDidmount run");
  }

  /**
   * Chạy từ lần render thứ 2 trở đi
   * Dùng để thực hiện các logic tính toán, thực hiện một hành động nào đó như
   * - Sử dụng props mới để setState
   * - Sử dụng giá trị state, props mới để call API
   *
   */
  componentDidUpdate(prevProps, prevState) {
    console.log("componenetDidUpdate run");
    if (prevState.userId !== this.state.userId) {
      this.fecthPosts();
    }
  }
  //Component chạy duy nhất 1 lần trước khi component bị huỷ bỏ
  componentWillUnmount() {
    console.log("componentWillUnmount: Tran troi day");
  }
  handleSelect = (userId) => {
    //Cách 1: (Cách này dùng local data đã được import, tuy nhiên liên tục update từ api gốc)
    //let detail = this.state.users.find((user) => user.id === userId);
    //Cách 2:
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    //Cách 3: Tạo stae userId và setState
  };
  changeUser = (e) => {
    const { value } = e.target;

    this.setState({
      userId: value,
    });
  };
  render() {
    console.log("render run", this.state);

    return (
      <div>
        <Children userId={this.state.userId} />
        {/* SELECT USER */}
        <select
          className="form-select w-25 mt-3 ms-3"
          onChange={this.changeUser}
        >
          <option value="">Select User</option>
          <option value="1">User 1</option>
          <option value="2">User 2</option>
          <option value="3">User 3</option>
          <option value="4">User 4</option>
          <option value="5">User 5</option>
          <option value="6">User 6</option>
          <option value="7">User 7</option>
          <option value="8">User 8</option>
          <option value="9">User 9</option>
          <option value="10">User 10</option>
        </select>
        <ul>
          {this.state.posts.map((post) => {
            return (
              <li key={post.id} className="mt-4">
                <span className="me-2">{post.title}</span>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.handleSelect(post.id);
                  }}
                >
                  Detail
                </button>
              </li>
            );
          })}
        </ul>
        <div className="container" id="detail"></div>
      </div>
    );
  }
}
