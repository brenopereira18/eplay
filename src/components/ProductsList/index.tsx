import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ title, background }: Props) => {
  return (
    <Container>
      <div className="container">
        <Title>{title}</Title>
        <List>
          <Product />
          <Product />
          <Product />
          <Product />
        </List>
      </div>
    </Container>
  )
}

export default ProductList
