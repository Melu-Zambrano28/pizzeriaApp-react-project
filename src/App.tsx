import React, { Fragment } from 'react'
import './App.css'
import { Announcement } from './Components/Announcement/Announcement'
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
