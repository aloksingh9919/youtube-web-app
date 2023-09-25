"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Relativevideocard from "../components/Relativevideocard";
const Relativevideo = ({ category }) => {
  // console.log(category, "ljfljdslffjsdfjsldf");
  const [video, setVideo] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyD3hYsUKE4BFwjJrfQ-djK6Z4thsOeRCGY&id&part=snippet&type=video&maxResults=20&videoCategoryId=${category}`
      )
      .then((res) => {
        setVideo(res.data.items);
      });
  }, [category]);
  
  // console.log(video);

  return (
    <div className=" flex gap-1 flex-col max-sm:items-center max-sm:justify-center max-sm:m-auto">
      {video.map((video) => (
        <Relativevideocard
          key={video.id}
          videoId={video.id.videoId}
          title={video.snippet.title}
          videoUrl={video.snippet.thumbnails.high.url}
          channel={video.snippet.channelTitle}
          time={video.snippet.publishedAt}
        />
      ))}
    </div>
  );
};

export default Relativevideo;
