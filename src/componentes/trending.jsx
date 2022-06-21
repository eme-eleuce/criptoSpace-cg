import React, {useState, useEffect} from 'react'
import axios from 'axios';
import CoinMap from './coinMap';


const TrendingCoins = () => {

    const [trending, setTrending] = useState([])
  
    const url = 'https://api.coingecko.com/api/v3/search/trending'

    useEffect(() => {

       axios.get(url).then((response) => {
        setTrending(response.data.coins)
        
       })
    }, [])

  return (
    <div className='rounded-div my-12 py-8 text-primary '>
        <h1 className='py-4 font-extrabold text-5xl text-center bg-gradient-to-l bg-radial-at-t from-amber-700 via-orange-300 to-rose-800 animate-text bg-clip-text  text-transparent '>Trending Coins</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {trending.map((coin, idx) => (

                <div key={idx} className='flex justify-between p-4 ease-in-out duration-300'>
                    <div className='flex justify-between w-full items-center'>
                        <div className='flex'>
                            <img className='mr-4 rounded-full' src={coin.item.small} alt="/" />
                            <div>
                                <p className='font-bold'>{coin.item.name}</p>
                                <p>{coin.item.symbol}</p>
                            </div>
                        </div>
                            <div className='items-center flex'>
                               
                                <p>#{coin.item.market_cap_rank}</p>
                            </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TrendingCoins;