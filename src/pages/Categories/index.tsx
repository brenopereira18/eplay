import ProductList from '../../components/ProductsList'
import { Game } from '../Home'

const promocoes: Game[] = []

const emBreve: Game[] = []

const Categories = () => {
  return (
    <>
      <ProductList games={promocoes} title="RPG" background="gray" />
      <ProductList games={emBreve} title="Ação" background="black" />
      <ProductList games={promocoes} title="Aventura" background="gray" />
      <ProductList games={emBreve} title="FPS" background="black" />
    </>
  )
}

export default Categories
