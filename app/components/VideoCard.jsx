import React from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { formatDistance, subDays } from "date-fns";
import DialougeBox from "../components/DialougeBox";
import { useState } from "react";
import Link from "next/link";
const VideoCard = ({
  title,
  thumbnails,
  channelTitle,
  publishedAt,
  videoid
  
}) => {
  // ---------------- date ---------------------
  const dateString = publishedAt;
  const dateObject = new Date(dateString);
  const watchtime = formatDistance(subDays(dateObject, 0), new Date(), {
    addSuffix: true,
  });
// -------------dialouge-------------
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogueshow, setisDialogueshow] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setisDialogueshow(true);
  };

  const handleBlur = () => {
    setisDialogueshow(false);
  };

  const [isshow, setisshow] = useState(false);
  const hendleclick = () => {
    setisshow(!isshow);
  };


  return (
    <Link  href={`/watch/${videoid}`}>
    <div
     
    className=" videocard "
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <img
        src={thumbnails}
        className=" thumbnails "
      />
      <div className="flex gap-4 px-2 pt-6 justify-center ">
        <img src={thumbnails} className=" w-10 h-10 rounded-full " />

        <div className="flex flex-col gap-1 w-3/4 ">
          <h2 className="font-bold">{title.slice(0, 35)}...</h2>
          <div className="flex flex-col grow ">
            <span className="text-zinc-300 text-md">{channelTitle}</span>
            <span className="text-zinc-300 text-md">
              1M views • {watchtime}
            </span>
          </div>
        </div>
        {/* --------------button--------- */}
        <div className="w-1 ">
          <button onFocus={handleFocus}
        onBlur={handleBlur}
            onClick={
              hendleclick}
          >
            {isHovered && <BsThreeDotsVertical size={20} />}
          </button>
        </div>
        {/* DialougeBox */}
 
         {isDialogueshow &&(
           <div className="z-20 absolute m-5 bg-transparent ">
        
           
           {isshow && <DialougeBox />}
        
          </div>)
         }
          
      </div>
    </div>
  </Link>
  );
};

export default VideoCard;

