import React from "react";

const SingleSkeleton = () => {
  return (
    <div
      role="status"
      class="w-1/6 p-1 flex flex-col h-full  shadow animate-pulse md:p-1 dark:border-gray-700"
    >
      <div class="flex items-center justify-center h-2/3 mb-4 bg-gray-600 rounded dark:bg-gray-700"></div>
      <div class="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div class="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
      <div class="flex items-center mt-4 space-x-3">
        <div>
          <div class="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
          <div class="w-48 h-2 bg-gray-500 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleSkeleton;
