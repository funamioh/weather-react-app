import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonForecast = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-forecast">
        <SkeletonElement type="input-window" />
        <SkeletonElement type="city-name" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="icon" />
        <SkeletonElement type="temperature" />
      </div>
    </div>
  );
};

export default SkeletonForecast;
