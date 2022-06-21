import React from 'react'
import CoinList from '../componentes/coinList';
import TrendingCoins from '../componentes/trending';



const Home = ({coins}) => {
  

  return (
    <div>
      <CoinList coins={coins} />
      <TrendingCoins />
    </div>
  )
}

export default Home;