import { ReactChildren } from 'react'
import { Home } from '../Components/Home/Home'

const SlicesMasters: string = '/sclicemasters'
const OrderAhead: string = '/order'

type Route = {
  path: string
  component?: React.ReactNode /*Da cambiare tipo*/
}

const NavBarRoutes: Route[] = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/pizzamenu',
  },
]

export { NavBarRoutes }
