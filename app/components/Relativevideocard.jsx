"use client";
import { useRouter } from "next/navigation";

const Relativevideocard = ({
  videoId,
  videoUrl,
  channel,
  views,
  time,
  title,
}) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/watch/${videoId}`);
  };
  return (
    
    <div
      onClick={onClick}
      className="w-[32%] max-lg:w-[100%] pt-5 h-full max-md:pt-1  "
    >
      <div className=" h-[120px] w-[31vw] flex hover:opacity-80 cursor-pointer max-lg:w-[90vw]">
        <div className="h-[120px] w-[60%] flex itemas-center max-md:w-[30%] max-lg:w-[27%] max-sm:w-[65%] rounded-lg">
          <img
            src={videoUrl}
            alt="loading"
            className="object-cover rounded-lg "
          />
        </div>
        <div className="h-[120px] flex flex-col pl-2 gap-1 w-[40vw] max-lg:w-[100vw]">
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
            <span className="text-[12px] text-zinc-200 bg-transparent cursor-pointer">{time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relativevideocard;
