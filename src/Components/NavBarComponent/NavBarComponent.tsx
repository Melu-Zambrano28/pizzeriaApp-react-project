import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Announcement } from '../Announcement/Announcement'
import { Home } from '../Home/Home'
import style from './NavBarComponent.module.scss'

const NavBarComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Fragment>
        <nav className={style.navBar}>
          <ul className={style.active}>
            <li className={style.hotnow}>
              <Link to="/home">HOME</Link>
            </li>
            <li className={style.pizzamenu}>
              <Link to="/pizzamenu">PIZZA MENU</Link>
            </li>
            <li className={style.melissaslice}>
              <Link to="/melissaslice">
                <div className={style.centralNavItem}>
                  <div>
                    <span className={style.est}>est 1994</span>
                  </div>
                  <h1>
                    <span className={style.lettersContainer}>
                      <span className={`${style.m}`}>M</span>
                      <span className={style.e}>E</span>
                      <span className={style.l}>L</span>
                      <span className={style.i}>I</span>
                      <span className={style.s}>S</span>
                      <span className={style.s}>S</span>
                      <span className={style.a}>A</span>
                      <span className={style.apos}>'</span>
                      <span className={style.s}>S</span>
                    </span>
                    <div className={style.centralNavItem}>
                      <span className={style.slice}>Slices</span>
                    </div>
                  </h1>
                </div>
              </Link>
            </li>
            <li className={style.sclicemasters}>
              <Link to="/sclicemasters">SLICEMASTERS</Link>
            </li>
            <li className={style.order}>
              <Link to="/order">ORDER AHEAD!</Link>
            </li>
          </ul>
        </nav>

        {
          /*Caricamento dei componenti secondo il router assegnato*/
          <Switch>
            <Route path="/home">
              <Home>
                <Announcement title="The best pizza in Milan!" announcement="Open 19pm to 2am Every Single Day" />
              </Home>
            </Route>
          </Switch>
        }
      </Fragment>
    </Router>
  )
}

export { NavBarComponent }
