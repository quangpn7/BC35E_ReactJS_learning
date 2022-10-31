import React, { Component } from "react";
import ExerciseCarStore from "../ExcersiceCarStore/ExerciseCarStore";
import ChildrenComponent from "./ChildrenComponent";

export default class DemoChildrenProps extends Component {
  render() {
    return (
      <div>
        <ChildrenComponent>
          <ExerciseCarStore />
        </ChildrenComponent>
      </div>
    );
  }
}
