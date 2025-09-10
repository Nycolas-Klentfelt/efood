import { List } from './styles'
import Cardapio from '../Cardapio'
import { MenuItem } from '../../pages/Home'
import { useState } from 'react'
import ModalProduct from '../ModalProduct'

type Props = {
  products: MenuItem[]
}

const CardapioList = ({ products }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (product: MenuItem) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <div className="container">
      <List>
        {products.map((produtos) => (
          <Cardapio
            key={produtos.id}
            title={produtos.nome}
            description={produtos.descricao}
            image={produtos.foto}
            onOpenModal={() => handleOpenModal(produtos)}
          />
        ))}

        {isModalOpen && selectedProduct && (
          <ModalProduct product={selectedProduct} onClose={handleCloseModal} />
        )}
      </List>
    </div>
  )
}

export default CardapioList
