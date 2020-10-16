import redHair from '../image/redHair.jpg'
import curlyHair from '../image/curlyHair.jpg'
import manCurlyHair from '../image/manCurlyHair.jpg'

type Image = {
  path: string
  description: string
  tag?: string
}

const allImages: Image[] = [
  {
    path: redHair,
    description: 'redHair',
  },
  {
    path: curlyHair,
    description: 'curlyHair',
  },
  {
    path: manCurlyHair,
    description: 'manCurlyHair',
  },
  {
    path: redHair,
    description: 'latinGirl',
  },
]

const allPizzaImages: Image[] = [
  {
    path:
      'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    description: 'avocado',
  },
  {
    path:
      'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
    description: 'pizzaZozza',
  },
  {
    path:
      'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
    description: 'pizzaZozza',
  },
  {
    path:
      'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    description: 'funghiPizza',
  },
]

export { allImages, allPizzaImages }
