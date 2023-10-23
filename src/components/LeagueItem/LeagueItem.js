import classes from './LeagueItem.module.css'

const LeagueItem = (props) => {

  const { league, country, seasons } = props.data;

  return (
    <section>
      <div className={classes.leagueItem}>
        <div className={classes.leagueHeader}>
          <h2>{country.name}<span>{country.code}</span></h2>
          <img src={country.flag} alt={country.name} />
          <em>{league.type}</em>
        </div>
        <div className={classes.leagueContent}>
          <div className={classes.league}>
            <h3>{league.name}</h3>
            <img src={league.logo} alt={league.name} />
          </div>

          <div className={classes.leagueSeasons}>
            <h3>Seasons</h3>
            <ul>
              {seasons.map(s => {
                return <li key={s.year}>
                  <p>Year: {s.year}</p>
                  <p>Season Start: {s.start}</p>
                  <p>Season End: {s.end}</p>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeagueItem