import { AiFillHome } from "react-icons/ai";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { RiFileVideoLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Smallmenu = ({hide}) => {
  const pathname = usePathname();
  const isHide = pathname.includes('/watch');
  return (
  hide && !isHide &&(
  <div className="smallleftsidebar max-md:hidden" >
     <Link href="/" >
        <div className="bot2 ">
          <AiFillHome size={22} className="bot " />
          <span className="small2">Home</span>
        </div>

     </Link>
        <div className="bot2">
          <RiFileVideoLine size={22} className="bot" />
          <span className="small2">Shorts</span>
        </div>

        <div className="bot2">
          <MdOutlineSubscriptions size={22} className="bot" />
          <span className="small2">Subscription</span>
        </div>

        <div className="bot2 ">
          <BiSolidVideos size={22} className="bot" />
          <span className="small2">Library</span>
        </div>

        <div className="bot2 ">
          <LiaDownloadSolid size={22} className="bot" />
          <span className="small2">Download</span>
        </div>
      
    </div>)
  );
};

export default Smallmenu;
