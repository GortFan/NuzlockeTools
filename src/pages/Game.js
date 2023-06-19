import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase-config';

import { useState, useEffect } from 'react';

import RoutePanel from '../components/gamesections/RoutePanel';

export default function GamePage(){

    const [gameData, setGameData] = useState([])
    const game = collection(db, "games")

    useEffect(() => {
      const getData = async () => {
        const q = query(game, where("path", "==", window.location.pathname));
        const qsnapshot = await getDocs(q);
        qsnapshot.forEach((doc) => {
          setGameData(doc.id)
        })
      };
  
      getData();
    }, []);

    return(
        <div>
          <RoutePanel q={gameData}/>
        </div>
    )
}