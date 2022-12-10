import React from "react";
import useToggle from "./useToggle";

const DemoCustom = () => {
  const [status, setStatus] = useToggle(false);
  return (
    <div className="w-25 m-auto text-center">
      <button onClick={setStatus} className="btn btn-success">
        {status ? "toggled" : "click to toggle"}
      </button>
    </div>
  );
};

export default DemoCustom;
