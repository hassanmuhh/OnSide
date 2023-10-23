import classes from './LoadingDiv.module.css';
function LoadingDiv(props) {
  return (
    <section className={classes.LoadingDiv}>
      <p>{props.state} <strong>...</strong></p>
    </section>
  )
}

export default LoadingDiv