import React, { Fragment } from 'react'
import style from './NavBarComponent.module.scss'

type NavBarProps = {
  name?: string
}
const NavBarComponent: React.FunctionComponent<NavBarProps> = ({ name }) => {
  return (
    <Fragment>
      <nav className={style.navBar}>
        <ul className={style.active}>
          <li className={style.hotnow}>
            <a href="#hotnow">HOT NOW</a>
          </li>
          <li className={style.pizzamenu}>
            <a href="#pizzamenu">PIZZA MENU</a>
          </li>
          <li className={style.melissaslice}>
            <a href="#melissaslice">
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
            </a>
          </li>
          <li className={style.sclicemasters}>
            <a href="#sclicemasters">SLICEMASTERS</a>
          </li>
          <li className={style.order}>
            <a href="#order">ORDER AHEAD!</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export { NavBarComponent }
