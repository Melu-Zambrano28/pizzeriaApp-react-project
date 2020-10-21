import React, { Fragment } from 'react'
import './App.css'
import { ContainerComponent } from './Components/ContainerComponent/ContainerComponent'
import { NavBarComponent } from './Components/NavBarComponent/NavBarComponent'
import { CardComponent } from './Components/CardComponent/CardComponent'
import { allImages, allPizzaImages } from './mocks/CardMocks'
import { Announcement } from './Components/Announcement/Announcement'

function App() {
  return (
    <div className="App">
      <ContainerComponent>
        <NavBarComponent />
        <Announcement title="The best pizza in Milan!" announcement="Open 19pm to 2am Every Single Day" />
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
      </ContainerComponent>
    </div>
  )
}

export default App
