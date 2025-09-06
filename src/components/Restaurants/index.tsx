import { Link } from 'react-router-dom'
import imageEstrela from '../../assets/images/estrela.png'
import * as S from './styles'

export type Props = {
  title: string
  category?: string
  description: string
  rating?: number
  image: string
  isFeatured?: boolean
  variant: string
}

const Restaurants = ({
  title,
  category,
  description,
  rating,
  image,
  isFeatured,
  variant
}: Props) => (
  <S.BoxProduct variant={variant}>
    <S.ImgProduct variant={variant}>
      <img src={image} alt={title} />
      <S.BoxTag>
        {isFeatured && <S.Tag>Destaque da semana</S.Tag>}
        {category && <S.Tag>{category}</S.Tag>}
      </S.BoxTag>
    </S.ImgProduct>
    <S.Infos variant={variant}>
      <S.BoxTitle>
        <S.Title variant={variant}>{title}</S.Title>
        {rating && (
          <S.Rating>
            {rating} <img src={imageEstrela} alt="avaliação" />
          </S.Rating>
        )}
      </S.BoxTitle>
      <div>
        <S.Description variant={variant}>{description}</S.Description>
      </div>
      <S.Button variant={variant} as={Link} to="/perfil">
        {variant === 'produto' ? 'Adicionar ao carrinho' : 'Saiba mais'}
      </S.Button>
    </S.Infos>
  </S.BoxProduct>
)

export default Restaurants
