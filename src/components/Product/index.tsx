import Tag from '../Tag'
import * as S from './styles'

const Product = () => {
  return (
    <S.Card>
      <img src="//placehold.it/222x250" />
      <S.Titulo>Nome do jogo</S.Titulo>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <S.Descricao>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad vero nobis
        maiores veniam ducimus minus unde quod, delectus dolorum blanditiis sed
        aperiam vel repudiandae libero in tempora voluptates expedita. Ducimus.
      </S.Descricao>
    </S.Card>
  )
}

export default Product
