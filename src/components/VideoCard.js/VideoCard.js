import classes from './VideoCard.module.css'

const VideoCard = (props) => {
  const convertedDate = new Date(props.date).toLocaleDateString();

  return (
    <div className={classes.videoCard}>
      <h3>{props.title}</h3>
      <img src={props.thumb} alt={props.title} />
      <div className={classes.VideoCardText}>
        <p><em>Competition:</em><strong>{props.comp}</strong></p>
        <p><em>Date:</em><strong>{convertedDate}</strong></p>
      </div>
    </div>
  )
}

export default VideoCard