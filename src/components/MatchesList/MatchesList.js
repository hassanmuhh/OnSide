import { useEffect, useState } from 'react'
import MatchDetailsCard from '../MatchDetailsCard/MatchDetailsCard'
import classes from './MatchesList.module.css'
import LoadingDiv from '../LoadingDiv/LoadingDiv';
// import getWeekMatches from '../../api/live-matches';

// import { fetchTodayMatches } from '../../utilities/todayMatches';
const MatchesList = () => {
  const [weeklyMatches, setWeeklyMatches] = useState(); // um set state to be undefined first to show loading div
  const [comingSoon, setComingSoon] = useState(true)
  useEffect(() => {
    async function getData() {
      try {
        // const matchesData = await fetchTodayMatches();
        // setWeeklyMatches(matchesData)
      } catch (err) {
        console.log('Failed to fetch Matches today:', err);
      }

    }
    getData()
  }, [])

  if (!weeklyMatches) {
    if (comingSoon === true) {
      return <LoadingDiv state="Coming Soon" />
    }
  }

  return (
    <section>
      <div className={classes.matchList}>
        {weeklyMatches.length > 0 && weeklyMatches.map(
          match => {
            return <MatchDetailsCard
              key={match.match_id}
              date={match.match_date}
              time={match.match_time}
              stadium={match.match_stadium}
              homeTeam={match.match_hometeam_name}
              awayTeam={match.match_awayteam_name}
              homeTeamgoals={match.match_hometeam_score}
              awayTeamgoals={match.match_awayteam_score}
              status={match.match_status}
              logoAway={match.team_away_badge}
              logoHome={match.team_home_badge}
              matchTime={match.match_time}
              leagueName={match.league_name}
            />
          }
        )}
      </div>
    </section>
  )
}

export default MatchesList
// <div className={classes.matchDetails}>
//   {match.fixture && <MatchDetailsCard
//     date={match.fixture.date}
//     stadium={match.fixture.venue.name}
//     homeTeam={match.teams.home}
//     awayTeam={match.teams.away}
//     goals={match.goals}
//     status={match.fixture.status.long}
//   />}
//   {match.fixture && <MatchDetailsCard
//     date={match.fixture.date}
//     stadium={match.fixture.venue.name}
//     homeTeam={match.teams.home}
//     awayTeam={match.teams.away}
//     goals={match.goals}
//     status={match.fixture.status.long}
//   />}
//   {match.fixture && <MatchDetailsCard
//     date={match.fixture.date}
//     stadium={match.fixture.venue.name}
//     homeTeam={match.teams.home}
//     awayTeam={match.teams.away}
//     goals={match.goals}
//     status={match.fixture.status.long}
//   />}
// </div>