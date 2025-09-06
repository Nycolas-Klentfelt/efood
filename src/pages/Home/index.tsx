import RestaurantsList from '../../components/RestaurantsList'
import Restaurant from '../../models/Restaurants'

import imgHioki from '../../assets/images/HiokiSushi.png'
import imgLaDolce from '../../assets/images/LaDolceVitaTrattoria.png'
import Header from '../../components/Header'

const todosOsRestaurantes: Restaurant[] = [
  {
    id: 1,
    category: 'japonesa',
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    rating: 4.9,
    image: imgHioki,
    isFeatured: true,
    variant: 'restaurant'
  },
  {
    id: 2,
    category: 'italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    image: imgLaDolce,
    variant: 'restaurant'
  },
  {
    id: 2,
    category: 'italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    image: imgLaDolce,
    variant: 'restaurant'
  },
  {
    id: 2,
    category: 'italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    image: imgLaDolce,
    variant: 'restaurant'
  },
  {
    id: 2,
    category: 'italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    image: imgLaDolce,
    variant: 'restaurant'
  },
  {
    id: 2,
    category: 'italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    image: imgLaDolce,
    variant: 'restaurant'
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantsList restaurants={todosOsRestaurantes} />
  </>
)

export default Home
