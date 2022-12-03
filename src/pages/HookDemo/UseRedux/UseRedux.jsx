import React from "react";
import { useDispatch, useSelector } from "react-redux";

const UseRedux = () => {
  //useSelector sử dụng như mapStateToProps
  const fontSize = useSelector((state) => state.fontSize);
  const imgSrc = useSelector((state) => state.imgSrc);
  const dispatch = useDispatch();
  let changeFS = (value) => {
    const action = {
      type: "TANG_GIAM_FONTSIZE",
      payload: value,
    };
    dispatch(action);
  };
  let changeColor = (color) => {
    const action = {
      type: "SELECT_CAR",
      payload: `img/${color}-car.jpg`,
    };
    dispatch(action);
  };

  return (
    <div className="container">
      <h3>Tăng giảm font-size</h3>
      <p style={{ fontSize: fontSize }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae autem
        perspiciatis quia mollitia maiores, repellendus laboriosam itaque
        tenetur porro vel!
      </p>
      <button
        className="btn btn-danger me-4"
        onClick={() => {
          changeFS(-1);
        }}
      >
        -
      </button>
      <button
        className="btn btn-success"
        onClick={() => {
          changeFS(1);
        }}
      >
        +
      </button>
      <hr />
      <h3>Change Car's color</h3>
      <div className="row">
        <div className="col-4">
          <img src={imgSrc} alt="..." className="w-100" />
        </div>
        <div className="col-8">
          <button
            className="btn btn-danger mx-2"
            onClick={() => changeColor(`red`)}
          >
            Red
          </button>
          <button
            className="btn btn-dark mx-2"
            onClick={() => changeColor(`black`)}
          >
            Black
          </button>
          <button
            className="btn btn-secondary mx-2"
            onClick={() => changeColor(`steel`)}
          >
            Steal
          </button>
          <button
            className="btn btn-info mx-2"
            onClick={() => changeColor(`silver`)}
          >
            Silver
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseRedux;
