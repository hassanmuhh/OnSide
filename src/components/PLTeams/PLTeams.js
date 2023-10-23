import React from 'react'
import classes from './PLTeams.module.css'
import { useEffect, useState } from 'react'
import getPLStanding from '../../api/PLStanding'
const PLTeams = (props) => {
  const [standing, setStanding] = useState([]);

  useEffect(() => {
    const getStanding = async () => {
      const data = await getPLStanding()
      setStanding(data)
    }
    getStanding()
  }, [])


  return (
    <div className={classes.leagueTable}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th style={{ textAlign: 'start' }}>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>Goals For</th>
            <th>Goals Against</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standing.length > 0 && standing.map(t => {
            return <tr key={t.team_id}>
              <td><img className={classes.badge} src={t.team_badge} alt={t.team_name} /></td>
              <td className={classes.nameRow}>
                {t.team_name}
              </td>
              <td>{t.overall_league_payed}</td>
              <td>{t.overall_league_W}</td>
              <td>{t.overall_league_D}</td>
              <td>{t.overall_league_L}</td>
              <td>{t.overall_league_GF}</td>
              <td>{t.overall_league_GA}</td>
              <td>{t.overall_league_PTS}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PLTeams;
