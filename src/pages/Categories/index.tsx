import { useEffect, useState } from 'react'
import ProductList from '../../components/ProductsList'
import { Game } from '../Home'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((answer) => answer.json())
      .then((answer) => setGamesAcao(answer))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((answer) => answer.json())
      .then((answer) => setGamesEsportes(answer))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((answer) => answer.json())
      .then((answer) => setGamesLuta(answer))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((answer) => answer.json())
      .then((answer) => setGamesRPG(answer))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((answer) => answer.json())
      .then((answer) => setGamesSimulacao(answer))
  }, [])

  return (
    <>
      <ProductList games={gamesAcao} title="Ação" background="black" />
      <ProductList games={gamesEsportes} title="Esportes" background="gray" />
      <ProductList games={gamesLuta} title="Luta" background="black" />
      <ProductList games={gamesRPG} title="RPG" background="gray" />
      <ProductList games={gamesSimulacao} title="Simulao" background="black" />
    </>
  )
}

export default Categories
