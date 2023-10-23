// import temp from '../../assets/images/play-fill.svg';
import classes from './MatchDetailsCard.module.css'
import tempLogo from '../../assets/images/logo512.png'
const MatchDetailsCard = (
  { date, stadium, matchTime, awayTeamGoals,
    homeTeamGoals, logoAway, logoHome, homeTeam, awayTeam,
    status, leagueName
  }
) => {

  const convertedDate = new Date(date).toLocaleDateString();

  // let scoreBoard = 'Not Started 0 - 0';

  // console.log('homeTeamGoals:', homeTeamGoals);
  // console.log('awayTeamGoals:', awayTeamGoals);
  // if (status === 'Finished') {
  //   scoreBoard = `${homeTeamGoals} - ${awayTeamGoals}`
  // }

  const handleLogoError = (event) => {
    event.target.src = tempLogo
  }

  return (
    <div className={classes.MatchDetailsCard}>
      <p>{leagueName}</p>
      <div className={classes['match-details']}>
        <p>Match Date: {convertedDate}</p>
        <p>Kick-off Time: {matchTime}</p>
        <p>Venue: {stadium}</p>
      </div>
      <div className={classes['match-fixture']}>
        <div className={classes['home-team']}>
          <img src={logoHome} alt="Home Team Logo" onError={handleLogoError} />
          <h2>{homeTeam}</h2>
        </div>
        <div className={classes['score']}>
          <p>{status}</p>
          <h3>{homeTeamGoals} - {awayTeamGoals}</h3>
        </div>
        <div className={classes['home-team']}>
          <img src={logoAway} alt="Away Team Logo" />
          <h2>{awayTeam}</h2>
        </div>
      </div>

    </div>
  )
}

export default MatchDetailsCard