import React from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import {Link} from 'react-router-dom';



const CoinMap = ({coin}) => {
  

  return (
    <>
        
        <tr className='h-[80px] border-b overflow-hidden  '>
              <td>  </td>
              <td>{coin.market_cap_rank} </td>
              <td> 
                <Link to={`/coin/${coin.id}`}>
                  <div className='flex items-center'> 
                        <img className='w-10 mr-2 rounded-full' src={coin.image} alt={coin.id} />
                         <p className='hidden sm:table-cell underline underline-offset-1'>{coin.name}</p>
                  </div>
                </Link>
              </td>
              <td>{coin.symbol.toUpperCase()} </td>
              <td>{coin.current_price.toLocaleString()}$</td>
              <td>{coin.price_change_24h > 0 ? (<p className='text-green-500'>{coin.price_change_24h.toFixed(1)}%</p>) 
                  : (<p className='text-red-500'>{coin.price_change_24h.toFixed(1)}%</p>) } 
              </td>
              <td className='w-[180px] hidden md:table-cell'>{coin.ath.toLocaleString()}$ </td>
              <td className='w-[180px] hidden sm:table-cell'>{coin.market_cap.toLocaleString()}$ </td>
              <td>
              <Sparklines data={coin.sparkline_in_7d.price}>
                    <SparklinesLine color='orange'/>
              </Sparklines>
              </td>
            </tr>
    </>
  )
}

export default CoinMap;