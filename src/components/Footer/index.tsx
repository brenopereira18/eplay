import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de RPG"
                to="/categories#rpg"
              >
                RPG
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de ação"
                to="/categories#action"
              >
                Ação
              </S.Link>
            </li>

            <li>
              <S.Link
                title="Clique aqui para acessar jogos de esporte"
                to="/categories#sports"
              >
                Esportes
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de simulação"
                to="/categories#simulation"
              >
                Simulação
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de luta"
                to="/categories#fight"
              >
                Luta
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Acesso rápido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos em promoção"
                to="/#on-sale"
              >
                Promoções
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos que serão lançados"
                to="/#coming-soon"
              >
                Em Breve
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </S.Container>
  )
}

export default Footer
