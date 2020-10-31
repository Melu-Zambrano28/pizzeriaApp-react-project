import React, { Fragment, FunctionComponent } from 'react'
import { allImages, allPizzaImages } from '../../mocks/CardMocks'
import { CardComponent } from '../CardComponent/CardComponent'
import style from './Home.module.scss'

const Home: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <div className={style.AppImageContainer}>
        <div className={style.titleAndImagesContainer}>
          <div className={style.homePubTitle}>
            <h1>OUR SPECIAL TEAM</h1>
            <p>Standing by, ready to slice you up!</p>
          </div>
          <div className={style.AppImageItems}>
            {allImages.map((img, index) => {
              return (
                <CardComponent
                  key={`fragmentPersonImages${index}`}
                  path={img.path}
                  description={img.description}
                  textmarkCopy={img.textMark}
                  backgroundMark={img.backgroundMark}
                />
              )
            })}
          </div>
        </div>

        <div className={style.titleAndImagesContainer}>
          <div className={style.homePubTitle}>
            <h1>OUR PIZZAS</h1>
            <p>Come on by, buy the slice!</p>
          </div>
          <div className={style.AppImageItems}>
            {allPizzaImages.map((imgPizza, indexPizza) => {
              return (
                <CardComponent
                  key={`cardId${indexPizza}`}
                  path={imgPizza.path}
                  description={imgPizza.description}
                  textmarkCopy={imgPizza.textMark}
                  backgroundMark={imgPizza.backgroundMark}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export { Home }
