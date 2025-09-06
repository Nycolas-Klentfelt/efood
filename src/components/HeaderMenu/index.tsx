import { Link } from 'react-router-dom'
import { Headerbar, LogoEfood } from '../Header/styles'

import { Container, TitleLink } from './styles'

const HeaderMenu = () => (
  <Headerbar>
    <div>
      <Container>
        <TitleLink as={Link} to="/">
          Restaurantes
        </TitleLink>
        <LogoEfood />
        <span>0 produto(s) no carrinho</span>
      </Container>
    </div>
  </Headerbar>
)

export default HeaderMenu
