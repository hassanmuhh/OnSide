import React from 'react'
import { useLocation } from 'react-router-dom'
import LeagueItem from '../components/LeagueItem/LeagueItem';

const LeagueDetails = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <section>
      <h1 className='h1-b1'>League Details</h1>
      <LeagueItem data={location.state} />
    </section>
  )
}

export default LeagueDetails