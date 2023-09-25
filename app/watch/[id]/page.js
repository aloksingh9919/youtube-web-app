'use client'

import Relativevideo from "@/app/components/Relativevideo";
import Watchvideo from "@/app/components/Watchvideo";
import axios from "axios";
import { useEffect, useState} from 'react';

const Page = ({ params }) => {
  const [video, setVideo] = useState([]);
  const [category, setCategory] = useState('');

  const apiKey = process.env.API_KEY;
  console.log(apiKey,'data key yt')
  useEffect(() => {
    let videoID = params.id;
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyD3hYsUKE4BFwjJrfQ-djK6Z4thsOeRCGY&id=${videoID}&part=snippet,statistics`
      )
      .then((res) => {
        setVideo(res.data.items);
        if (res.data.items.length > 0) {
          const firstVideo = res.data.items[0];
          const cateGoryId = firstVideo.snippet.categoryId;
          setCategory(cateGoryId);
        }
      });
  }, [params.id]);

  return (
    <div className='flex max-lg:flex-col gap-1 '>
      {video.map((videoItem) => (
        <Watchvideo
          key={videoItem.id}
          videoID={videoItem.id}
          title={videoItem.snippet.title}
          thumbnails={videoItem.snippet.thumbnails.high.url}
          channelTitle={videoItem.snippet.channelTitle}
          publishedAt={videoItem.snippet.publishedAt}
          description={videoItem.snippet.description}
          viewCount={videoItem.statistics.viewCount}
          likeCount={videoItem.statistics.likeCount}
        />
      ))}
      <Relativevideo category={category} />
    </div>
  );
};

export default Page;
