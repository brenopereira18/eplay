import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <S.HeaderBar>
      <div>
        <img src={logo} alt="EPLAY" />
        <nav>
          <S.Link>
            <S.LinkItem>
              <a href="#">Categorias</a>
            </S.LinkItem>
            <S.LinkItem>
              <a href="#">Novidades</a>
            </S.LinkItem>
            <S.LinkItem>
              <a href="#">Promoções</a>
            </S.LinkItem>
          </S.Link>
        </nav>
      </div>
      <S.LinkCart>
        0 - produtos(s)
        <img src={carrinho} alt="Carrinho de compras" />
      </S.LinkCart>
    </S.HeaderBar>
  )
}

export default Header
