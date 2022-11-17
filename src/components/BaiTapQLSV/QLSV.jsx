import React, { Component } from "react";
// import axios from "axios";
import FormInput from "./FormInput";
import Table from "./Table";
import TableFilter from "./TableFilter";

export default class QLSV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      inputField: {
        id: "",
        fullName: "",
        phone: 0,
        email: "",
      },
      editFlag: false,
    };
  }
  fetchData = () => {
    if (localStorage.getItem("dataSv")) {
      let localData = JSON.parse(localStorage.getItem("dataSv"));
      try {
        this.setState({
          data: localData,
        });
      } catch (error) {}
    }
  };
  saveToLocalStorage = () => {
    localStorage.setItem("dataSv", JSON.stringify(this.state.data));
  };
  handleInput = (filledForm) => {
    this.state.data.push(filledForm);
    this.saveToLocalStorage();
  };
  handleEditFlag = () => {
    this.setState({
      editFlag: true,
    });
  };

  deleteStudent = (id) => {
    let index = this.state.data.findIndex((student) => student.id === id);
    let decision = window.confirm(
      `Xác nhận xoá sinh viên ${this.state.data[index].fullName}`
    );
    if (decision) {
      this.setState({
        data: this.state.data.splice(index, 1),
      });
      alert(`Xoá thành công sinh viên ${this.state.data[index].fullName}`);
      this.saveToLocalStorage();
    }
  };

  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.data.length !== this.state.data.length) {
      console.log(this.state.data);
      this.fetchData();
    }
  }
  render() {
    return (
      <div>
        <hr />
        <h3 className="bg-dark text-white py-2 ps-3">Thông tin sinh viên</h3>
        <div className="container">
          <FormInput
            handleInput={this.handleInput}
            editFlag={this.state.editFlag}
          />
          <TableFilter />
          <Table
            dataSv={this.state.data}
            deleteStudent={this.deleteStudent}
            handleEditFlag={this.handleEditFlag}
          />
        </div>
      </div>
    );
  }
}
