import { AiFillHome } from "react-icons/ai";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { GoHistory } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { RiFileVideoLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Menubar = ({View}) => {
  return (
    
   View && (<aside className="leftsidebar  ">
      <div className="border-b-2 border-zinc-900">
        <Link href="/">
        <li className="bi">
          <AiFillHome size={24} className="bot" />
          <span>Home</span>
        </li></Link>
        <li className="bi">
          <RiFileVideoLine size={24} className="bot" />
          <span>Shorts</span>
        </li>

        <li className="bi">
          <MdOutlineSubscriptions size={24} className="bot" />
          <span>Subscription</span>
        </li>
      </div>
      <div className="border-b-2 border-zinc-900">
        <li className="bi">
          <BiSolidVideos size={24} className="bot" />
          <span>Library</span>
        </li>
        <li className="bi">
          <GoHistory size={24} className="bot" />
          <span>History</span>
        </li>
        <li className="bi">
          <RiVideoLine size={24} className="bot" />
          <span>Your Videos</span>
        </li>
        <li className="bi">
          <MdOutlineWatchLater size={24} className="bot" />
          <span>Watch later</span>
        </li>
        <li className="bi">
          <LiaDownloadSolid size={24} className="bot" />
          <span>Download</span>
        </li>
        <li className="bi">
          <IoIosArrowDown size={24} className="bot" />
          <span>Show more</span>
        </li>
      </div>
    </aside>)
  );
};

export default Menubar;
