import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title} </h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>

      <div className="">
        <button className=" bg-white text-black hover:bg-opacity-70 p-4 px-12 text-xl  rounded-lg">
        <i className ="fa-solid fa-play"></i>
           Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12  hover:bg-opacity-70 text-xl bg-opacity-50 rounded-lg">
        <i className="fa-light fa-circle-info"></i>
           More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
