"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Searchvideocard from "@/app/components/Searchvideocard";

const page = ({ params }) => {
  const [video, setvideo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyD3hYsUKE4BFwjJrfQ-djK6Z4thsOeRCGY&id=video&part=snippet&maxResults=200&q=${params.id}`
      )
      .then((res) => {
        setvideo(res.data.items);
      });
  }, [params.id]);

  return (
    <div className="flex mt-6 flex-col gap-1">
       {video.map((video) => (
        <Searchvideocard
          key={video.id.videoId}
          videoid={video.id.videoId}
          title={video.snippet.title}
          thumbnails={video.snippet.thumbnails.medium.url}
          channelTitle={video.snippet.channelTitle}
          publishedAt={video.snippet.publishedAt}
        />
      ))}
    </div>
  );
};

export default page;
