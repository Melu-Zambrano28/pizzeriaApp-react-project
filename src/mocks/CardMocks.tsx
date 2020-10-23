import redHair from '../image/redHair.jpg'
import curlyHair from '../image/curlyHair.jpg'
import manCurlyHair from '../image/manCurlyHair.jpg'

type Image = {
  path: string
  description: string
  textMark: string
  backgroundMark: string
}

const allImages: Image[] = [
  {
    path: redHair,
    description: 'redHair',
    textMark: 'Maria',
    backgroundMark: 'greenMark',
  },
  {
    path: curlyHair,
    description: 'curlyHair',
    textMark: 'Melissa',
    backgroundMark: 'yellowMark',
  },
  {
    path: manCurlyHair,
    description: 'manCurlyHair',
    textMark: 'Raul',
    backgroundMark: 'yellowMark',
  },
  {
    path: redHair,
    description: 'latinGirl',
    textMark: 'Rossy',
    backgroundMark: 'greenMark',
  },
]

const allPizzaImages: any[] = [
  {
    path:
      'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    description: 'avocado',
    textMark: 'Avocado',
    backgroundMark: 'yellowMark',
  },
  {
    path:
      'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
    description: 'pizzaZozza',
    textMark: 'Zozza',
    backgroundMark: 'greenMark',
  },
  {
    path:
      'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
    description: 'pizzaZozza',
    textMark: 'Zozza',
    backgroundMark: 'yellowMark',
  },
  {
    path:
      'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    description: 'funghiPizza',
    textMark: 'Funghi',
    backgroundMark: 'greenMark',
  },
]

export { allImages, allPizzaImages }
