import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footerSection}>
      <h3 className={classes.logo}>OnSide</h3>
      <p>
        We bring our users a free tool with statistics, analysis and hunches of football matches from all over the world. In addition, we have high-quality daily tips from our team of professional and expert analysts in the field of ticket forecasting. There are more than 1000 games analyzed per month and 70 leagues for you to study. All of this is 100% free.
      </p>
      <nav>
        <ul>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Contact</a></li>
          <li><a href='/'>Privacy Policy</a></li>
          <li><a href='/'>Cookies Policy</a></li>
          <li><a href='/'>Terms & Conditions</a></li>
        </ul>
      </nav>
      <div className={classes.copyrights}>
        <p>© 2020-2023 OnSide. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer