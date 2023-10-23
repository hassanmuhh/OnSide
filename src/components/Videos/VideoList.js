import { useEffect, useState } from "react";
import VideoCard from "../VideoCard.js/VideoCard";
import classes from './VideoList.module.css'
import { Link } from "react-router-dom";
import { SHA1 } from "crypto-js";
import { useContext } from "react";
import { VideoContext } from "../../store/VideoContext";

const VideoList = () => {
  const [videosList, setVideosList] = useState([]);
  const { setVideos } = useContext(VideoContext);

  useEffect(() => {
    const getData = async () => {
      const data = await getVideos();
      setVideosList(data)
      setVideos(data)
    }
    getData()
  }, [setVideos])

  const getVideos = async () => {
    const API_KEY = process.env.REACT_APP_API_VIDEOS_KEY
    const url = `https://www.scorebat.com/video-api/v3/feed/?token=${API_KEY}`;
    const response = await fetch(url);
    const result = await response.json();
    const videosWithId = result.response.map((video) => ({
      ...video,
      id: SHA1(`${video.title}-${video.competition}-${video.date}`),
    }));
    return videosWithId;
  }


  return (
    <section>
      <div className={classes.videoList}>
        {videosList.length > 0 && videosList.map(video => {
          return <Link to={`${video.id}`} state={video} key={video.id}><VideoCard key={video.id} title={video.title} comp={video.competition} thumb={video.thumbnail} date={video.date} /></Link>
        })}
      </div>
    </section>
  )
}

export default VideoList