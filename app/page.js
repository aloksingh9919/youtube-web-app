"use client";
import React, { useEffect, useState } from "react";
import VideoCard from "./components/VideoCard";
import axios from "axios";
const home = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=200&key=AIzaSyD3hYsUKE4BFwjJrfQ-djK6Z4thsOeRCGY"
      )
      .then((res) => {
        setVideo(res.data.items);
      });
  }, []);
  
  return (
    <div>
      <div className=" flex flex-wrap gap-4 mt-6  items-start">
        {video.map((video) => (
          <VideoCard
            title={video.snippet.title}
            thumbnails={video.snippet.thumbnails.high.url}
            channelTitle={video.snippet.channelTitle}
            publishedAt={video.snippet.publishedAt}
          videoid={video.id}
            />
            ))}
      </div>
      </div> 
  );
};

export default home;
