import classes from './VideoItem.module.css';

const VideoItem = (props) => {
  const { title, competition, date, thumbnail, videos } = props.videoData;

  const convertedDate = new Date(date).toLocaleDateString();

  const videoSrc = videos[0].embed;
  const videoSrcStart = videoSrc.indexOf("src='") + 5;
  const videoSrcEnd = videoSrc.indexOf("'", videoSrcStart);

  const finalSrc = videoSrc.substring(videoSrcStart, videoSrcEnd)


  return (
    <section>
      <h1 className={classes.videoItemHeading}>Watch Video</h1>
      <div className={classes.videoItem}>
        <h2 className={classes.highlights}>Highlights</h2>
        <h2>{title}</h2>
        <div className={classes.videoText}>
          <p>{competition}</p>
          <p>{convertedDate}</p>
        </div>
        <div className={classes.videoArea}>
          <iframe src={finalSrc} title='highlights video' scrolling="no" allowFullScreen></iframe>
        </div>
        <div className={classes.videoDesc}>
          <p>
            Relive the excitement of the epic showdown between {title} with this thrilling highlights video! From the opening whistle to the final buzzer, witness the heart-stopping action as both teams battle it out for supremacy on the field. See the stunning goals, the incredible saves, and the nail-biting moments that had fans on the edge of their seats. With expert commentary and expertly shot footage, this video is the ultimate way to experience the drama and intensity of one of the most unforgettable games of the season. Don't miss out on the chance to witness the magic of {title}!
          </p>
        </div>
      </div>
    </section>
  )
}

export default VideoItem