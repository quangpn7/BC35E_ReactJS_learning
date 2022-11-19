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
      update: false,
      editSv: {},
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
  handleUpdate = async (filledForm) => {
    let index = this.state.data.findIndex((sv) => sv.id === filledForm.id);
    const newData = [...this.state.data];
    newData[index] = filledForm;

    this.setState({
      data: newData,
    });
  };
  handleEditData = (sv) => {
    console.log(sv);
    this.setState({
      update: true,
      editSv: sv,
    });
  };

  deleteStudent = (id) => {
    let index = this.state.data.findIndex((student) => student.id === id);
    let decision = window.confirm(
      `Xác nhận xoá sinh viên ${this.state.data[index].fullName}`
    );
    if (decision) {
      alert(`Xoá thành công sinh viên ${this.state.data[index].fullName}`);
      let newData = [...this.state.data];
      newData.splice(index, 1);
      this.setState({
        data: newData,
      });
      // console.log(index);
      // console.log(this.state.data.splice(index, 1));
      // this.saveToLocalStorage();
    }
  };

  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState.data) !== JSON.stringify(this.state.data)) {
      this.saveToLocalStorage();
      this.fetchData();
    }
  }

  render() {
    return (
      <div>
        <hr />
        <h3 className="bg-dark text-white py-2 ps-3">Thông tin sinh viên</h3>
        {/* <ModalEdit /> */}
        <div className="container">
          <FormInput
            update={this.state.update}
            handleInput={this.handleInput}
            handleUpdate={this.handleUpdate}
            editSv={this.state.editSv}
          />
          <TableFilter />
          <Table
            dataSv={this.state.data}
            deleteStudent={this.deleteStudent}
            handleEditData={this.handleEditData}
          />
        </div>
      </div>
    );
  }
}
