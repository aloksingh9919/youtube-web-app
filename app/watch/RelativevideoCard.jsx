'use client'
import { useRouter } from "next/navigation";

const RelativevideoCard = ({videoId ,videoUrl, channel, views, time, title }) => {
  const router = useRouter();
  const onClick=()=>{
    router.push(`/watch/${videoId}`)
  }
  return (
    <div  
    onClick={onClick}
     className="w-[32%] max-lg:w-[100%] pt-5 h-full max-md:pt-1 cursor-pointer">
             <div className="h-[100px]  w-[100%]  flex hover:opacity-80 ">
        <div className="h-[100px] w-[49%] flex justify-start itemas-center max-md:w-[25%] max-lg:w-[22%] max-sm:w-[30%] rounded-lg">
          <img
            src={videoUrl}
            alt="loading"
            className="object-cover rounded-lg "
          />
        </div>
        <div className="h-[100px] w-[70%] flex justify-start flex-col pl-2 gap-1 bg-transparent">
          <span className="font-bold text-md bg-transparent cursor-pointer">
            {title}
          </span>
          <span className="text-sm text-zinc-200 bg-transparent cursor-pointer">
            {channel}
          </span>
          <div className=" flex justify-items-start gap-2 bg-transparent">
            <span className="text-[12px] text-zinc-200 bg-transparent cursor-pointer">
              {views}
            </span>
            <span className="text-[12px] text-zinc-200 bg-transparent cursor-pointer">
              {" "}
              • {time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelativevideoCard;
