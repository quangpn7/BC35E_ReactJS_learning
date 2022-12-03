import React from "react";
import { useRef } from "react";
import { useState } from "react";

const UseRefDemo = () => {
  const [number, setNumber] = useState(1);
  const [comment, setComment] = useState("");
  const commentRef = useRef("");
  //   const inputRef = useRef(null)

  const handleChange = (e) => {
    commentRef.current = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // inputRef.current.style.background = "green";
  };
  return (
    <div className="container mt-5">
      <button
        className="btn btn-primary"
        onClick={() => {
          setNumber(number + 1);
          console.log(number);
        }}
      >
        +
      </button>
      <div className="card">
        <div className="card-header">
          <div className="comment p-2" style={{ background: `#EEE` }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur totam sunt nobis soluta, ad ab ipsum cupiditate quae
            enim in error facere nostrum aliquam reprehenderit eaque provident
            natus vero odio.
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <textarea
              //   ref={inputRef}
              onChange={handleChange}
              className="form-control"
              name="comment"
            />
            <button type="submit" className="btn btn-success mt-2">
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UseRefDemo;
