import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  
  const router = useRouter();
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    router.push(`/Search/${search}`);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFocus = () => {
    setIsSearchActive(true);
  };

  const handleBlur = () => {
    setIsSearchActive(false);
  };

  return (
    <form onSubmit={(e) => handleSubmitSearch(e)}>
      <div className="h-[40px] w-[48vw] border-[1px] border-zinc-700 flex rounded-2xl justify-center max-sm:h-[30px] ">
        <div className="h-[37px] w-[43vw] flex rounded-2xl pl-3  max-sm:h-[27px]">
          {isSearchActive && (
            <AiOutlineSearch
              size={28}
              className="mr-[2px] bg-transparent mt-[2px] max-sm:w-[22px] max-sm:h-[22px]  "
            />
          )}

          <div className=" ml-1 shrink">
            <input
              type="text"
              placeholder="Search"
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="h-[35px] w-[36vw]  outline-none placeholder:text-lg max-sm:placeholder:text-[12px] max-sm:h-[27px]"
            />
          </div>
        </div>
        <div className="w-[5vw] h-[38px] rounded-r-2xl   bg-zinc-800 shrink  max-sm:h-[28px] pl-[2vw] max-sm:pl-0">
          <AiOutlineSearch
            size={28}
            className="mr-[2px] bg-transparent mt-[2px] max-sm:w-[20px] max-sm:h-[20px] max-sm:mr-0"
          />
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
{
  /* <div className="flex w-[600px] bg-zinc-800 justify-between h-[40px] rounded-2xl p-[2px]">
{isSearchActive && <AiOutlineSearch size={30} className="bg-transparent mx-1 mt-1" />}
<div className="flex rounded-l-2xl   ">

<input
  type="text"
  placeholder="Search"
  onChange={handleInputChange}
  onFocus={handleFocus}
  onBlur={handleBlur}
  className="w-[520px] outline-none rounded-l-2xl focus:outline-blue-800 px-1"
/>
</div>
<div className="w-[80px]  bg-transparent">
<AiOutlineSearch size={28} className=" bg-transparent ml-[45px] mt-1" />

</div>
</div> */
}
