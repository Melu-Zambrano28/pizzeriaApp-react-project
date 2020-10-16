import React, { Fragment } from 'react'
import './App.css'
import { ContainerComponent } from './Components/ContainerComponent/ContainerComponent'
import { NavBarComponent } from './Components/NavBarComponent/NavBarComponent'
import { CardComponent } from './Components/CardComponent/CardComponent'
import { allImages, allPizzaImages } from './mocks/CardMocks'
import { TextMark } from './Components/TextMark/TexMark'

function App() {
  return (
    <div className="App">
      <ContainerComponent>
        <NavBarComponent />

        <div className="AppImageContainer">
          <div className="AppImageBlock">
            <div className="AppImageItems">
              {allImages.map((img, index) => {
                return (
                  <Fragment key={`fragment${index}`}>
                    <TextMark key={`textMarkId${index}`} text="ciao" markDetail="red" />
                    <CardComponent key={`cardId${index}`} path={img.path} description={img.description} />
                  </Fragment>
                )
              })}
            </div>
          </div>

          <div className="AppImageBlock">
            <div className="AppImageItems">
              {allPizzaImages.map((imgPizza, indexPizza) => (
                <CardComponent key={indexPizza} path={imgPizza.path} description={imgPizza.description} />
              ))}
            </div>
          </div>
        </div>
      </ContainerComponent>
    </div>
  )
}

export default App
