import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import style from './NavBarComponent.module.scss'

const SquareSpace: React.FunctionComponent = () => {
  return (
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
  )
}

const NavBarComponent: React.FunctionComponent = () => {
  return (
    <Fragment>
      <nav className={style.navBar}>
        <ul className={style.active}>
          <li className={style.hotnow}>
            <Link to="/">HOME</Link>
          </li>
          <li className={style.pizzamenu}>
            <Link to="/pizzamenu">PIZZA MENU</Link>
          </li>
          <li className={style.melissaslice}>
            <Link to="/melissaslice">
              <SquareSpace />
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
    </Fragment>
  )
}

export { NavBarComponent }
