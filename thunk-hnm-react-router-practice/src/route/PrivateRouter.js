import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";
import { useLocation } from "react-router";

const PrivateRoute = ({ authenticate }) => {
  // const location = useLocation();
  // console.log("location: ", location);
  return authenticate ? (
    <ProductDetail />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
