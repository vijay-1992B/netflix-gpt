const VideoTitle = ({ title, overview }) => {
  return (
    <div className="  pt-45 px-16 absolute text-white bg-linear-to-r from-black w-full aspect-video ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/3 py-6 text-lg">{overview}</p>
      <div>
        <button className="bg-white text-black  p-4 px-12 text-xl  rounded-lg hover:opacity-80 cursor-pointer ">
          {" "}
          ▶ Play
        </button>
        <button className="bg-gray-500/50 mx-2 text-white p-4 px-12 text-xl  rounded-lg cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
