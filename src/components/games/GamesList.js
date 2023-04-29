import classes from './GamesList.module.css'
import GamesItem from './GamesItem'
export default function GamesList(props) {
    console.log(props)
    return(
        <ul className={classes.list}>
            {props.games.games.map(games=><GamesItem key={games.id} image={games.image} title={games.title} path={games.path}/>)}
        </ul>
    )
}

//GamesList now has an array prop from AllGames which is mapped into another array of a different format, in this case an array of JSx elements
//These elements are all known as GamesItem and are unique by accepting specific key value pairs as props from the objects within each array index that are predefined
//These are known as key, image, and title
//These destructured props are then passed onto GamesItem which is responsible for rendering the specific content decided upon by posting data to a database
//See GamesItem for final comment explanation 