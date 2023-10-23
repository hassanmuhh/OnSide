import { createContext, useState } from "react";

export const VideoContext = createContext();

const VideoProvider = (props) => {
  const [videos, setVideos] = useState([]);

  return <VideoContext.Provider value={{ videos, setVideos }}>
    {props.children}
  </VideoContext.Provider>
};

export default VideoProvider