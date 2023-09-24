import React from "react";
import SingleSkeleton from "./SingleSkeleton";

const LoadingSkeleton = () => {
  return (
    <div className="flex w-full h-full">
      <SingleSkeleton />
      <SingleSkeleton />
      <SingleSkeleton />
      <SingleSkeleton />
      <SingleSkeleton />
      <SingleSkeleton />
    </div>
  );
};

export default LoadingSkeleton;
