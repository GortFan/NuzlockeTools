import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'

import AllGames from './pages/AllGames';
import Game from './pages/Game';
import Layout from './components/layout/Layout';

import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import MainNavigation from './components/layout/MainNavigation';

function App() {
  const [games, setGames] = useState([])
  const gamelist = collection(db, "games")

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(gamelist);
      setGames(data.docs.map((doc) => ({ ...doc.data()})))
    };

    getData();
  }, []);
  
  return (
    <div>
      <MainNavigation/>
        <Routes>
          <Route path='/' element={<AllGames games={games}/>}/>
          <Route path='/game/:name' element={<Game/>}/>
        </Routes>
    </div>
  );
}

export default App;
