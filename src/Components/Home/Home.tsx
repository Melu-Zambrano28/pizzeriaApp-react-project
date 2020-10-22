import React, { Fragment, FunctionComponent } from 'react'
import { allImages, allPizzaImages } from '../../mocks/CardMocks'
import { CardComponent } from '../CardComponent/CardComponent'

const Home: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      {children}
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
