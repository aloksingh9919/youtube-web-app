import { AiFillHome } from "react-icons/ai";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiFileVideoLine } from "react-icons/ri";
import Link from "next/link";

const Smallmenu = () => {
  return (

  <div className="  border-t-2 border-zinc-700
   flex justify-evenly overflow-hidden z-20 w-screen md:hidden items-center" >
     <Link href="/" >
     
        <div className="w-16 text-center m-1 cursor-pointer hover:bg-zinc-800 p-1 rounded-md">
          <AiFillHome size={25} className="bg-transparent m-auto " />
          <span className="text-[12px]  pt-[6px]  bg-transparent">Home</span>
        </div>
     </Link>
        <div className="w-16 text-center m-1 cursor-pointer  hover:bg-zinc-800 p-1 rounded-md">
          <RiFileVideoLine size={25} className="bg-transparent m-auto" />
          <span className="text-[12px]  pt-[6px]  bg-transparent">Shorts</span>
        </div>

        <div className=" px-2  m-1 cursor-pointer  hover:bg-zinc-800  rounded-md">
          <IoIosAddCircleOutline size={42} className="bg-transparent p-auto" />
          
        </div>

        <div className="w-16 text-center m-1 cursor-pointer  hover:bg-zinc-800 p-1 rounded-md">
          <MdOutlineSubscriptions size={25} className="bg-transparent m-auto" />
          <span className="text-[10px]  pt-[6px]  bg-transparent">Subscription</span>
        </div>

        <div className="w-16 text-center m-1 cursor-pointer  hover:bg-zinc-800 p-1 rounded-md">
          <BiSolidVideos size={25} className="bg-transparent m-auto" />
          <span className="text-[12px]  pt-[6px]  bg-transparent">Library</span>
        </div>

        
      
    </div>
  );
};

export default Smallmenu;