import { Route, Routes } from 'react-router-dom';

import AllGames from './pages/AllGames';
import Game from './pages/Game';
import Layout from './components/layout/Layout';
import { db } from './firebase-config';

const GAME_DATA=[
  {
      id: 'game1',
      title: 'Renegade Platinum',
      path: '/game/Renegade-Platinum',
      image: 'https://i.imgur.com/viQMKJY.png'
  }
]

function App() {
  
console.log(db)

  return (
      <Layout>
        <Routes>
          <Route path='/' element={<AllGames games={GAME_DATA}/>}/>
          <Route path='/game/:name' element={<Game/>}/>
        </Routes>
      </Layout>
  );
}

export default App;
