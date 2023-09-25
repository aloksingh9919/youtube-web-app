import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineVideoCall } from "react-icons/md";
import Searchbar from "../components/Searchbar";
import Link from "next/link";

const Header = ({ clickhendle }) => {
 

  return (
    <>
      <nav className=" flex w-full px-5 py-3 justify-between items-center fixed topbar max-sm:px-1 max-sm:py-3">
        {/* left side */}
        <div className="flex gap-2 items-center max-sm:gap-1">
          <div className="h-[35px] w-[35px] max-sm:w-[25px] max-sm:h-[25px]">
            <button
              onClick={(e) => {
                clickhendle();
              }}
            >
              <AiOutlineMenu
                size={32}
                className="hover:bg-zinc-700 rounded-full p-[4px] max-sm:w-[25px] max-sm:h-[25px] max-sm:p-[1px]"
              />
            </button>
          </div>
          <Link href="/">
            <div className="flex items-center gap-2 max-sm:gap-1">
              <Image
                src="/logo.png"
                alt="Logo"
                width={30}
                height={30}
                className="max-sm:w-[20px] max-sm:h-[15px]"
              />
              <span className="text-2xl font-[990] max-sm:text-[14px]">
                YouTube
              </span>
            </div>
          </Link>
        </div>
        {/* center */}

        <Searchbar />

        {/* right-side  */}
        <div className="flex gap-2 max-sm:gap-1  ">
          <div className="h-[35px] w-[35px] max-sm:w-[25px] max-sm:h-[25px] ">
            <MdOutlineVideoCall
              size={35}
              className="hover:bg-zinc-800 rounded-full p-[4px] max-sm:w-[25px] max-sm:h-[25px] max-sm:p-[1px]"
            />
          </div>
          <div className="h-[35px] w-[35px] max-sm:w-[25px] max-sm:h-[25px] ">
            <IoIosNotificationsOutline
              size={35}
              className="hover:bg-zinc-800 rounded-full p-[4px] max-sm:w-[25px] max-sm:h-[25px] max-sm:p-[1px]"
            />
          </div>
          <div className="h-[35px] w-[35px] max-sm:w-[25px] max-sm:h-[25px]">
            <Image
              src="/photo.jpg"
              width={35}
              height={35}
              className="rounded-full fill max-sm:w-[25px] max-sm:h-[25px] max-sm:p-[1px]"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
