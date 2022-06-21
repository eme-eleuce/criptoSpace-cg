import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import {FaTwitter, FaWhatsapp, FaGithub, FaReddit} from 'react-icons/fa';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';



const CoinInfo = () => {
  
  const [coin,setCoin] = useState({})
  const params = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`

  useEffect(() => {

    axios.get(url).then((response) => {

      setCoin(response.data)
      console.log(response.data)
    })
  }, [url])
  

  return (
    <div className='rounded-div my-12 px-8'>
      <div className='flex py-10'>
          <img className='w-20 mr-8' src={coin.image?.large} alt="/" />
        <div>
          <p className='text-3xl font-bold'>{coin?.name} </p>
          <p>({coin.symbol}) </p>
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <div className='flex justify-between'>
            {coin.market_data?.current_price ? 
            (<p className='text-4xl font-bold'>{coin.market_data?.current_price.usd.toLocaleString()}$</p>)
             : null }
             <p className='text-gray-500'>Last 7 days</p>
          </div>
          <div>
            <div>
              <Sparklines data={coin.market_data?.sparkline_7d.price}>
                    <SparklinesLine color='orange'/>
              </Sparklines>
            </div>
               <div className='flex justify-between py-4'>
                <div>
                <p className='text-gray-500 text-sm'>Market Cap</p>
                <p>{coin.market_data?.market_cap ? (<p>{coin.market_data.market_cap.usd.toLocaleString()}$ </p> ) : null} </p>
               </div>
               <div>
                  <p  className='text-gray-500 text-sm'>Genesis Block</p>
                  <p>{coin.genesis_date}</p>
               </div>
              </div>
          </div>

             <div className='flex justify-between py-4'>
              <div>
                <p  className='text-gray-500 text-sm'>All Time High</p>
                {coin.market_data?.ath ? (<p>{coin.market_data.ath.usd.toLocaleString()}$ </p> ) : null}
              </div>
              <div>
                <p  className='text-gray-500 text-sm'>All Time Low</p>
                {coin.market_data?.atl ? (<p>{coin.market_data.atl.usd.toLocaleString()}$ </p> ) : null}
              </div>
             </div>
            </div>

             <div>
              <p className='text-xl font-bold text-center'>Market Stats</p>
              <div className='flex justify-between py-4'>
                <div>
                  <p className='text-gray-500 text-sm'>Market Rank</p>
                  {coin.market_cap_rank}
                </div>
                <div>
                  <p className='text-gray-500 text-sm'>Category</p>
                  {coin.categories ? (<p>{coin.categories[0]} </p> ) : null}
                </div>
                <div>
                  <p className='text-gray-500 text-sm'>Trust Score</p>
                  {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)} </p> : null}
                </div>
              </div>

               <div className='flex justify-between py-4'>
                <div>
                  <p className='text-gray-500 text-sm'>Price Change (24h)</p>
                  {coin.market_data ? (<p>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>) : null}
                </div>
                <div>
              <p className='text-gray-500 text-sm'>Price Change (7d)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (14d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (30d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (60d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Price Change (1y)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>
              ) : null}
            </div>
               </div>

               <div className='flex justify-around p-6 border rounded-xl'>
               <FaTwitter size={35}/>
                <FaWhatsapp size={35}/>
                <FaReddit size={35}/>
               <FaGithub size={35}/>
               </div>
           </div>
        </div>

         <div className='py-4'>
          <p className='text-xl font-bold'>About {coin.name}</p>
          <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}} ></p>
         </div>

    </div>
  )
}

export default CoinInfo;