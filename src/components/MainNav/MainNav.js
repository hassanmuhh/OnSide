import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainNav.module.css'

const MainNav = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.navList}>
          <li><NavLink to="/" className={classes.logo}>OnSide</NavLink></li>
          <li className={classes.mainLinks}>
            <NavLink to="/" className={({ isActive }) => isActive ? classes.active : ''}>Home</NavLink>
            <NavLink to="/matches" className={({ isActive }) => isActive ? classes.active : ''}>Matches</NavLink>
            <NavLink to="/leagues" className={({ isActive }) => isActive ? classes.active : ''}>Leagues</NavLink>
            <NavLink to="/videos" className={({ isActive }) => isActive ? classes.active : ''}>Videos</NavLink>
          </li>
          <li><NavLink to="search">Search</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNav