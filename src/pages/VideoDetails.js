import VideoItem from '../components/VideoItem/VideoItem'
import { useLocation } from 'react-router-dom';

const VideoDetails = () => {
  const location = useLocation()

  // console.log('Location', location.state);

  return (
    <section>
      <VideoItem videoData={location.state} />
    </section>
  )
}

export default VideoDetails