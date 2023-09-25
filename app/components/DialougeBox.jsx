import { MdOutlineWatchLater } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { RiPlayList2Fill } from "react-icons/ri";
import { RiPlayListAddLine } from "react-icons/ri";
import { PiShareFat } from "react-icons/pi";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import { MdOutlinedFlag } from "react-icons/md";


const DialougeBox = () => {
  return (
    <>
      <div className=" bg-zinc-800 rounded-md ">
        <div className="dialouge">
          <RiPlayList2Fill size={25} className="icondialouge" />
          <span className="textdialouge">Add to queue</span>
        </div>
        <div className="dialouge">
          <MdOutlineWatchLater size={25} className="icondialouge" />
          <span className="textdialouge">Save to Watch later</span>
        </div>
        <div className="dialouge">
          <RiPlayListAddLine size={25} className="icondialouge" />
          <span className="textdialouge">Save to playlist</span>
        </div>
        <div className="dialouge">
          <LiaDownloadSolid size={25} className="icondialouge" />
          <span className="textdialouge">Download</span>
        </div>
        <div className="dialouge ">
          <PiShareFat size={25} className="icondialouge" />
          <span className="textdialouge">Share</span>
        </div>
        <hr className="bg-zinc-900" />
      <div className="dialouge">
          <MdDoNotDisturbAlt size={25} className="icondialouge" />
          <span className="textdialouge">Not interested</span>
        </div>
      <div className="dialouge">
          <MdOutlineDoNotDisturbOn size={25} className="icondialouge" />
          <span className="textdialouge">Don't recommend channel</span>
        </div>
      <div className="dialouge">
          <MdOutlinedFlag size={25} className="icondialouge" />
          <span className="textdialouge">Report</span>
        </div>
      </div>
      </>
  );
};

export default DialougeBox;
