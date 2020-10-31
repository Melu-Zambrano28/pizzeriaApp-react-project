import React from 'react'
import './App.css'
import { ContainerComponent } from './Components/ContainerComponent/ContainerComponent'
import { NavBarComponent } from './Components/NavBarComponent/NavBarComponent'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import { Announcement } from './Components/Announcement/Announcement'
import { Home } from './Components/Home/Home'
import { PizzaMenu } from './Components/PizzaMenu/PizzaMenu'

const PageSkeleton: React.FunctionComponent = ({ children }) => {
  return (
    <ContainerComponent>
      <NavBarComponent />
      {children}
    </ContainerComponent>
  )
}

const HomePage: React.FunctionComponent = () => {
  return (
    <PageSkeleton>
      <Home>
        <Announcement title="The best pizza in Milan!" announcement="Open 19pm to 2am Every Single Day" />
      </Home>
    </PageSkeleton>
  )
}

const PizzamenuPage: React.FunctionComponent = () => {
  return (
    <PageSkeleton>
      <PizzaMenu />
    </PageSkeleton>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/pizzamenu/:pizza">
            <PizzamenuPage />
          </Route>
          <Route path="/pizzamenu">
            <PizzamenuPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
