//snippet: rafce -> arrow functional component with export

import React, { useState } from "react";

const UseStateDemo = () => {
  const [number, setNumber] = useState(0);
  const [FontSize, setFontSize] = useState(16);
  const [state, setState] = useState({
    like: 1,
  });

  //Khi sử dụng setState trong fnc nó sẽ đè một obj mới vào state chứ không thay đổi như class com
  return (
    <div className="container">
      <h3>Demo useState</h3>
      <p>Number: {number}</p>
      <button
        className="btn btn-success mx-2"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <button
        className="btn btn-success mx-2"
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </button>
      <hr />
      <p>Like: {state.like}</p>
      <button
        className="btn btn-danger mx-2"
        onClick={() => {
          setState({
            like: state.like + 1,
          });
        }}
      >
        <i className="fas fa-heart"></i>
      </button>
      <button
        className="btn btn-warning mx-2"
        onClick={() => {
          setState({
            like: 1,
          });
        }}
      >
        <i className="fas fa-sync"></i>
      </button>
      <hr />
      <p style={{ fontSize: FontSize }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
        temporibus. Quod, assumenda esse. Omnis, mollitia magnam ipsam
        consequuntur sapiente aliquam, odio sequi magni aut placeat illo,
        deserunt earum minus dolor?
      </p>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          setFontSize(FontSize + 2);
        }}
      >
        <i className="fas fa-plus"></i>
      </button>
      <button
        className="btn btn-warning mx-2"
        onClick={() => {
          setFontSize(16);
        }}
      >
        <i className="fas fa-sync"></i>
      </button>
    </div>
  );
};

export default UseStateDemo;
