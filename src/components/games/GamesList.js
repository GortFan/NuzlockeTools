import classes from './GamesList.module.css'
import GamesItem from './GamesItem'
export default function GamesList(props) {
    return(
        <ul className={classes.list}>
            {props.games.games.map(games=><GamesItem key={games.id} image={games.imagesrc} title={games.title} path={games.path}/>)}
        </ul>
    )
}