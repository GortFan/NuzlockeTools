import { useState, useEffect } from 'react'

import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore'

import Card from '../UI/Card'
import classes from './RoutePanel.module.css'

export default function RoutePanel(props){

    let collectionQ = "/games/" + props.q + "/routes"

    const [routes, setRoutes] = useState([])
    
    useEffect(() => {
        const getData = async () => {
            const routelist = collection(db, collectionQ)
            const data = await getDocs(routelist);
            setRoutes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
        };
    
        getData();
      }, [props]);

    console.log(routes)

    return(
        <div className={classes.panelContainer}>
        <div className={classes.panel}>
            {routes.map((route) => <div className={classes.panelElement}>{route.id}</div>)} 
        </div>
        </div>
    )
}

//accept props from `Game.js`. Props will be the an array of all the routes in the game. Array gets mapped to
//generate items in a list