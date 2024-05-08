"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import LandingInfo from "./components/LandingInfo";
import CoursePanel from "./components/CoursePanel";

const Home = () => {
  return (
    <div className="">
      <div>
        <LandingInfo />
      </div>
      <div>
        <div className="flex flex-row bg-cerulean h-40 p-10">
          <div className="bg-red-400">hello</div>
          <div className="bg-red-400">hello</div>
          <div className="bg-red-400">hello</div>
        </div>
      </div>
      <div className="">
        <CoursePanel />
      </div>
    </div>
  );
};

export default Home;
