import React, {useState} from 'react';
import CoinMap from './coinMap';



const CoinList = ({coins}) => {

  const [searchTexto, setSearchTexto] = useState('');

  return (
    <div className='rounded-div my-4'> 
      <div className='flex flex-col justify-between md:flex-row pt-4 pb-6 text-center md:text-right'>
        <h1 className='text-2xl font-extrabold my-2'>Search Cripto</h1>
        <form action="">
          <input onChange={(e) => setSearchTexto(e.target.value)} 
          className='w-full bg-primary border border-input px-4 py-2 rounded-lg text-left'
          type="text" 
          placeholder='Type a Coin'/>
        </form>
      </div>

      <table className='w-full text-center border-collapse'>
        <thead>
          <tr className='border-b'>
            <th></th>
            <th className='px-4'>#</th>
            <th className='text-left'>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h -/+</th>
            <th className='hidden md:table-cell'>All Time High</th>
            <th className='hidden sm:table-cell'>Market Cap</th>
            <th>Last 7 days</th>
            
            
          </tr>
        </thead>
        <tbody>
        {coins
            .filter((value) => {
              if (searchTexto === '') {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchTexto.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinMap key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default CoinList;