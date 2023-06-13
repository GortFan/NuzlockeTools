import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'

import AllGames from './pages/AllGames';
import Game from './pages/Game';
import Layout from './components/layout/Layout';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore'

function App() {
  const [gameData, setGameData] = useState([])
  const DB_DATA = collection(db, "games")

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(DB_DATA);
      setGameData(data.docs.map((doc) => ({ ...doc.data()})))
    };

    getData();
  }, []);
  
  return (
      <Layout>
        <Routes>
          <Route path='/' element={<AllGames games={gameData}/>}/>
          <Route path='/game/:name' element={<Game/>}/>
        </Routes>
      </Layout>
  );
}

export default App;
