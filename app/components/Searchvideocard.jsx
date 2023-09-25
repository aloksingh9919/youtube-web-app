'use client'

import { useRouter } from "next/navigation";
import { formatDistance, subDays } from "date-fns";
const Searchvideocard = ({ publishedAt, channelTitle, thumbnails ,title,videoid}) => {

  
  const dateString = publishedAt;
  const dateObject = new Date(dateString);
  const watchtime = formatDistance(subDays(dateObject, 0), new Date(), {
    addSuffix: true,
  });


  const router = useRouter()
  const onclick = ()=>{
    router.push(`/watch/${videoid}`)
  }

  return (
    <div onClick={onclick}
      className=" overflow-hidden cursor-pointer max-sm:m-auto
    "
    >
      <div className="h-[250px] flex max-sm:flex-col max-sm:gap-2  max-sm:mx-[20px]">
        <div className="h-[250px] w-[450px] object-cover rounded-lg  ">
          <img
            src={thumbnails}
            alt="loading"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="h-[200px] w-full flex justify-start flex-col pl-2 gap-1 bg-transparent ">
          <span className=" font-bold text-lg max-sm:text-sm bg-transparent cursor-pointer">
            {title}
          </span>
          <span className="text-md max-sm:text-[12px] text-zinc-400 bg-transparent cursor-pointer">
            {channelTitle}
          </span>
          <div className=" flex justify-items-start gap-2 bg-transparent">
            <span className="text-md max-sm:text-[10px] text-zinc-400 bg-transparent cursor-pointer">
              {" "}
             {watchtime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchvideocard;
