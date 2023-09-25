"use client";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { formatDistance, subDays } from "date-fns";
import ReadMore from "@/app/components/ReadMore";
const Watchvideo = ({
  videoID,
  title,
  channelTitle,
  thumbnails,
  publishedAt,
  viewCount,
  likeCount,
  description,
}) => {
  const dateString = publishedAt;
  const dateObject = new Date(dateString);
  const watchtime = formatDistance(subDays(dateObject, 0), new Date(), {
    addSuffix: true,
  });
  return (
    <div
      className="w-[67%]  max-lg:w-[100%]  lg:min-w-[67%] pt-7 max-lg:h-screen  max-sm:h-fit h-screen 

  "
    >
      <div className="w-[99%] h-[65vh] m-auto rounded-xl mb-2 max-md:h-[60vh] max-lg:h-[60vh] max-sm:h-[40vh] bg-slate-400 object-cover flex justify-center items-center">

      <iframe
        className=" object-cover rounded-xl w-[100%] h-[100%] "
        src={`https://www.youtube.com/embed/${videoID}`}
        title="video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        />
        </div>
         

      <div className="w-[100%] m-auto  mb-10 flex-wrap h-fit ">
        <span className="m-1 font-bold text-lg max-md:text-[16PX] max-sm:text-[16px]">
          {title}
        </span>
        {/* ----------subscribe bar---------------- */}

        <div className=" h-[60px] flex justify-between  items-center w-[100%] max-sm:flex-col max-md:gap-1  ">
          <div className="flex justify-center items-center gap-2 max-md:w-full max-md:justify-start">
            <img
              src={thumbnails}
              alt="chainel img"
              className="w-[44px] h-[44px] rounded-full border-2 border-zinc-900 max-md:mx-1"
            />
            <div className="flex-col flex justify-center items-start h-[50px] w-[130px]  ">
              <span className="font-bold text-[15px] flex-wrap max-sm:text-[12px]">
                {channelTitle}
              </span>
              <span className="text-[12px] text-zinc-300  max-sm:text-[10px]">
                697K subscribers
              </span>
            </div>
            <div className=" flex justify-center items-center w-[100px] h-[36px] cursor-pointer rounded-3xl bg-white gap-1 px-1 hover:bg-zinc-200 ">
              <span className="font-bold text-[14px] bg-transparent text-black">
                Subscribe
              </span>
            </div>
          </div>
          <div className="flex gap-2  justify-center items-center max-md:w-full max-md:mx-2 max-md:justify-start">
            <div className="w-[150px] h-[36px] flex justify-center items-center  bg-zinc-800 rounded-3xl cursor-pointer max-md:mx-2 ">
              <div className="w-[60%]  flex justify-center items-center gap-1 border-r-2 border-zinc-900 bg-transparent rounded-l-3xl hover:bg-zinc-700 ">
                <AiOutlineLike
                  size={27}
                  className="rounded-3xl bg-transparent h-[36px]"
                />
                <span className="font-bold bg-transparent text-sm">
                  {likeCount}
                </span>
              </div>
              <div className="w-[40%] flex justify-center items-center rounded-r-2xl bg-transparent hover:bg-zinc-700 border-l-2 border-zinc-900">
                <BiDislike size={27} className="bg-transparent h-[36px]" />
              </div>
            </div>
            <div className="flex justify-center items-center w-[100px] h-[36px] cursor-pointer rounded-3xl bg-zinc-800 gap-1 px-1 hover:bg-zinc-700 ">
              <PiShareFat size={27} className="bg-transparent" />
              <span className="bg-transparent font-bold text-sm">Share</span>
            </div>
            <div className="flex justify-center items-center rounded-full w-[36px] cursor-pointer h-[36px]  bg-zinc-800 hover:bg-zinc-700 ">
              <BsThreeDots size={20} className=" bg-transparent rounded-full" />
            </div>
          </div>
        </div>
        <div className="w-[100%] h-fit mt-1  text-[14px] p-2 leading-8 bg-zinc-800 rounded-lg hover:bg-zinc-700 max-sm:mt-12">
          <div className="bg-transparent gap-1">
            <span className="bg-transparent px-1 font-bold">{viewCount}</span>
            <span className="bg-transparent px-1 font-bold">•</span>
            <span className="bg-transparent px-1 font-bold">{watchtime}</span>
          </div>
          <div className=" mt-1 text-[14px] leading-1 bg-transparent px-1 ">
            <ReadMore className="bg-transparent">
            {description}
            </ReadMore>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchvideo;
