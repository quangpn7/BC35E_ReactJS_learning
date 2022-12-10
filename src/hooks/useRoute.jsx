import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const useRoute = () => {
  const params = useParams();
  const navigate = useNavigate();

  return {
    params,
    navigate,
  }; //custom hook return value, not html tag
};

export default useRoute;
