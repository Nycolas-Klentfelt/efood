import { List } from './styles'

import Restaurant from '../../models/Restaurants'
import Restaurants from '../Restaurants'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <div className="container">
    <List variant={restaurants[0].variant}>
      {restaurants.map((restaurants) => (
        <Restaurants
          title={restaurants.title}
          category={restaurants.category}
          description={restaurants.description}
          image={restaurants.image}
          rating={restaurants.rating}
          key={restaurants.id}
          isFeatured={restaurants.isFeatured}
          variant={restaurants.variant}
        />
      ))}
    </List>
  </div>
)

export default RestaurantsList
