import React, { Fragment } from 'react'
import logo from './logo.svg'
import './App.css'
import pizza from './image/pizza.jpg'
import { ContainerComponent } from './Components/ContainerComponent/ContainerComponent'
import { NavBarComponent } from './Components/NavBarComponent/NavBarComponent'

function App() {
  return (
    <div className="App">
      <ContainerComponent>
        <NavBarComponent />
        <div>Melissa</div>
      </ContainerComponent>
    </div>
  )
}

export default App
