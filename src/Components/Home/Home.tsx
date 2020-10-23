import React, { Fragment, FunctionComponent } from 'react'
import { allImages, allPizzaImages } from '../../mocks/CardMocks'
import { CardComponent } from '../CardComponent/CardComponent'
import { TextMark } from '../TextMark/TexMark'
import style from './Home.module.scss'

const Home: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      {children}
      <div className={style.homeCotainerTit}>
        <div className={style.homeItemsTit}>
          <div className={style.homePubTitle}>
            <h1>OUR SPECIAL TEAM</h1>
            <p>Standing by, ready to slice you up!</p>
          </div>
        </div>
        <div className={style.homeItemsTit}>
          <div className={style.homePubTitle}>
            <h1>OUR PIZZAS</h1>
            <p>Come on by, buy the slice!</p>
          </div>
        </div>
      </div>

      <div className="AppImageContainer">
        <div className="AppImageBlock">
          <div className="AppImageItems">
            {allImages.map((img, index) => {
              return (
                <Fragment key={`fragmentPersonImages${index}`}>
                  <CardComponent
                    key={`cardId${index}`}
                    path={img.path}
                    description={img.description}
                    textMark={img.textMark}
                    backgroundMark={img.backgroundMark}
                  />
                </Fragment>
              )
            })}
          </div>
        </div>

        <div className="AppImagePizzaBlock">
          <div className="AppImageItems">
            {allPizzaImages.map((imgPizza, indexPizza) => {
              return (
                <Fragment key={`fragmentPizzaImages${indexPizza}`}>
                  <CardComponent
                    key={`cardId${indexPizza}`}
                    path={imgPizza.path}
                    description={imgPizza.description}
                    textMark={imgPizza.textMark}
                    backgroundMark={imgPizza.backgroundMark}
                  />
                </Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export { Home }
