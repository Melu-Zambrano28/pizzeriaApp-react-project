import React, { FunctionComponent } from 'react'
import { useLocation, useParams } from 'react-router-dom'

type RouteParams = {
  pizza?: string
}
const PizzaMenu: FunctionComponent = () => {
  const location = useLocation()
  const params = useParams<RouteParams>()
  return (
    <div>
      Questa è la pagina: {location.pathname}{' '}
      {Object.keys(params).length > 0 && params.pizza && <div>Gusto del giorno: {params.pizza}</div>}
    </div>
  )
}

export { PizzaMenu }
