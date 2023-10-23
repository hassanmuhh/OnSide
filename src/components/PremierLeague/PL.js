import React, { useState } from 'react'
import classes from './PL.module.css'
import { NavLink } from 'react-router-dom'
import PLTeams from '../PLTeams/PLTeams'
const PL = () => {
  const [activeTab, setActiveTab] = useState('standing')

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <h1 className='h1-b1'>Premier League Statistics</h1>
      <nav className={classes.nav}>
        <ul className={classes.navUl}>
          <NavLink onClick={() => handleTabChange('standing')} className={activeTab === 'standing' ? classes.active : ''}>Standing</NavLink>
          <NavLink onClick={() => handleTabChange('fixtures')} className={activeTab === 'fixtures' ? classes.active : ''}>Fixtures</NavLink>
          <NavLink onClick={() => handleTabChange('scorers')} className={activeTab === 'scorers' ? classes.active : ''}>Top Scorers</NavLink>
          <NavLink onClick={() => handleTabChange('assists')} className={activeTab === 'assists' ? classes.active : ''}>Top Assists</NavLink>
        </ul>
      </nav>

      {activeTab === 'standing' && <PLTeams />}

    </>
  )
}

export default PL