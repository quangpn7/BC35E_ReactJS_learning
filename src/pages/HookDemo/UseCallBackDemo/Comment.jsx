import React, { memo } from "react";

const Comment = (props) => {
  console.log("comment");
  return (
    <div>
      You hit {props.like} times
      <br />
      <textarea></textarea> <br />
      <button className="btn btn-primary">Gửi</button>
    </div>
  );
};
export default memo(Comment);
