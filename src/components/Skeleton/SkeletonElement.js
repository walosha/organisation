import React from "react";
import "./SkeletonElement.module.css";

const SkeletonElement = ({ type }) => {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
};

export default SkeletonElement;
