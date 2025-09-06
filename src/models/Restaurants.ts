class Restaurant {
  title: string
  category?: string
  description: string
  rating?: number
  image: string
  id: number
  isFeatured?: boolean
  variant: 'restaurant' | 'produto'

  constructor({
    id,
    title,
    description,
    image,
    variant,
    category,
    rating,
    isFeatured
  }: Restaurant) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.variant = variant
    this.category = category
    this.rating = rating
    this.isFeatured = isFeatured
  }
}

export default Restaurant
