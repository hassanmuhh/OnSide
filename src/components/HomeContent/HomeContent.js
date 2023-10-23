import classes from './HomeContent.module.css';
import img1 from '../../assets/images/fans-home.jpg';
import img2 from '../../assets/images/fans-home2.jpg';
import enjoy from '../../assets/images/enjoy.jpg';

const HomeContent = () => {

  return (
    <>
      <section>
        <div className={classes.homeContent}>
          <div className={classes.homeContentText}>
            <h2><span>Search</span> in our website for your favourite team, player or league.</h2>
          </div>
          <div className={classes.homeContentImg}>
            <img src={img1} alt='' />
          </div>
        </div>
        <div className={`${classes.homeContent} ${'light-bck'}`}>
          <div className={classes.homeContentImg}>
            <img src={img2} alt='' />
          </div>
          <div className={classes.homeContentText}>
            <h2><span>Choose</span> from our varaity which is your favourite team and get notified for every fixutre.</h2>
          </div>
        </div>
        <div className={classes.homeContent}>
          <div className={classes.homeContentText}>
            <h2><span>Search</span> in our website for your favourite team, player or league.</h2>
          </div>
          <div className={classes.homeContentImg}>
            <img src={img1} alt='' />
          </div>
        </div>

      </section>
      <div className={classes.homeContentEnjoy}>
        <div className={classes.enjoyBck}>
          <img src={enjoy} alt='enjoy our site' />
          <h2>Enjoy Your Best Experience With Us</h2>
        </div>
      </div>
    </>
  )
}

export default HomeContent