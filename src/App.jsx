import react, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import NavBar from './componentes/navbar';
import {ThemeProvider} from './contexto/themeContext';
import Home from './rutas/home';
import SignIn from './rutas/signIn';
import SignUp from './rutas/signUp';
import Account from './rutas/account';
import axios from 'axios';
import CoinInfo from './rutas/coinInfo';
import Final from './componentes/final';


function App() {

  const [coins, setCoins] = useState([]);
  
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=true';
  
  useEffect(() => {

    axios.get(url).then((response) => {

      setCoins(response.data)
    } )
  }, [url])

  return (
    <ThemeProvider>
      <NavBar/>
          <Routes>
             <Route path='/' element={<Home coins={coins} />} />
             <Route path='/signin' element={<SignIn />} />
             <Route path='/signup' element={<SignUp />} />
             <Route path='/account' element={<Account />} />
             <Route path='coin/:coinId' element={<CoinInfo/>}>
              <Route path=':coinId'/>
             </Route>
          </Routes>
          <Final />
    </ThemeProvider>
  )
}

export default App;
