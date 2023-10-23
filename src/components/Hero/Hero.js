import classes from './Hero.module.css'

const Hero = () => {
  return (
    <div className={classes.heroSection}>
      <div className={classes.heroBackground}>
      </div>
      <div className={classes.heroHeading}>
        <h1>Experience the thrill of the game, live on your screen.</h1>
        <p>Join us for non-stop football action!</p>
      </div>
    </div>

  )
}

export default Hero