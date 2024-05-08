import React from "react";
import Image from "next/image";

const CourseCard = () => {
  return (
    <div className="m-3 min-w-[500px] h-[96%] p-2 bg-cream shadow-md shadow-black">
      <div className="relative overflow-hidden h-1/2">
        <Image
          src="/dmitri.png"
          alt="dmitri.png"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h3 className="font-bold text-black">UI/UX Programming</h3>
      <p className="text-black text-justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the {"industry's"}
      </p>
    </div>
  );
};

export default CourseCard;
