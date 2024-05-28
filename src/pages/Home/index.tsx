import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import Game from '../../models/Game'
import Resident from '../../assets/images/resident.png'
import Diablo from '../../assets/images/diablo.png'
import StarWars from '../../assets/images/star_wars.png'
import Zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    id: 1,
    infos: ['10%', 'R$ 250,00'],
    system: 'windows',
    title: 'Resident',
    image: Resident
  },
  {
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    id: 2,
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5',
    title: 'Resident',
    image: Diablo
  },
  {
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    id: 3,
    infos: ['10%', 'R$ 250,00'],
    system: 'windows',
    title: 'Resident',
    image: StarWars
  },
  {
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    id: 4,
    infos: ['10%', 'R$ 250,00'],
    system: 'windows',
    title: 'Resident',
    image: Zelda
  }
]

const emBreve: Game[] = [
  {
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    id: 5,
    infos: ['17/05'],
    system: 'PS5',
    title: 'Diablo',
    image: Diablo
  },
  {
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    id: 6,
    infos: ['17/05'],
    system: 'PS5',
    title: 'Resident',
    image: Resident
  },
  {
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    id: 7,
    infos: ['17/05'],
    system: 'PS5',
    title: 'Star Wars',
    image: StarWars
  },
  {
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    id: 8,
    infos: ['17/05'],
    system: 'PS5',
    title: 'Resident',
    image: Diablo
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <ProductList games={promocoes} title="Promoções" background="gray" />
      <ProductList games={emBreve} title="Em breve" background="black" />
    </>
  )
}

export default Home
