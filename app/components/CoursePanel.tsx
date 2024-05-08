import React from "react";
import CourseCard from "./CourseCard";

const CoursePanel = () => {
  return (
    <div
      id="courses"
      className="flex flex-row h-screen overflow-hidden bg-cream "
    >
      <div className="flex flex-col bg-cream w-1/4 p-10 space-y-2">
        <h1 className="text-cerulean">Courses</h1>
        <p className="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the {"industry's"} standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has
        </p>
      </div>
      <div className="flex flex-col w-3/4 space-y-6 h-full bg-harvest_gold p-10 ">
        <div className="flex flex-row space-x-2">
          <input
            className="input rounded-none max-w-xs"
            placeholder="Search for course"
          />
          <select className="select rounded-none w-full max-w-md">
            <option disabled selected>
              Categories
            </option>
            <option>Homer</option>
          </select>
        </div>
        <div className="flex flex-col w-full h-full">
          <h2 className="font-bold text-gray-800">Featured Courses</h2>
          <div
            className="h-full flex flex-row overflow-x-auto space-x-4 "
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#006992 transparent",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="w-[500px]">
              <CourseCard />
            </div>
            <div className="w-[500px]">
              <CourseCard />
            </div>
            <div className="w-[500px]">
              <CourseCard />
            </div>
            <div className="w-[500px]">
              <CourseCard />
            </div>
            <div className="w-[500px]">
              <CourseCard />
            </div>
            <div className="w-[500px]">
              <CourseCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePanel;
