import React from 'react'
import './App.css'
import { ContainerComponent } from './Components/ContainerComponent/ContainerComponent'
import { NavBarComponent } from './Components/NavBarComponent/NavBarComponent'

function App() {
  return (
    <div className="App">
      <ContainerComponent>
        <NavBarComponent />
      </ContainerComponent>
    </div>
  )
}

export default App
