import React from "react";
import { useParams } from "react-router-dom";

const DemoUseParams = () => {
  const params = useParams();

  return <div className="container">Detail of: {params.id}</div>;
};

export default DemoUseParams;
