import imgClose from '../../assets/images/close.png'
import { Button } from '../Cardapio/styles'
import { Modal, ModalAbout, ModalContent, CloseImg } from './styles'

type Props = {
  product: {
    nome: string
    descricao: string
    foto: string
    preco: number
  }
  onClose: () => void
}

const ModalProduct = ({ product, onClose }: Props) => {
  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }
  return (
    <Modal className="visivel">
      <ModalContent className="container">
        <img src={product.foto} alt={product.nome} />
        <ModalAbout>
          <h3>{product.nome}</h3>
          <p>{product.descricao}</p>
          <Button>Adicionar ao carrinho - {formataPreco(product.preco)}</Button>
        </ModalAbout>
        <CloseImg onClick={onClose}>
          <img src={imgClose} alt="Fechar modal" />
        </CloseImg>
      </ModalContent>
      <div className="overlay" onClick={onClose}></div>
    </Modal>
  )
}

export default ModalProduct
