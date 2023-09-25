"use client";

import { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [readMore, setReadmore] = useState(true);
  const toggleFunction = () => {
    setReadmore(!readMore);
  };
  return (
    <>
      {readMore ? text.slice(0, 150) : text}
      <div onClick={toggleFunction} className="bg-transparent cursor-pointer">
        {readMore ? "Show More.." : "Show Less.."}
      </div>
    </>
  );
};

export default ReadMore;
