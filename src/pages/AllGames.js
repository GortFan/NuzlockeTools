//import GamesItem from '../components/games/GamesItem';
import GamesList from '../components/games/GamesList';

export default function AllGamesPage(props){
    return(
        <div>
            <GamesList games={props}/>
        </div>
    )
}

//This way of rendering a list of components is not hardcoded because the number of games listed is dependant on data from the GAMES_DATA array
//The games data array can be linked to the backend via an api which then grabs game data from a database 
//The way the number of components is linked to the number of games is as follows
//GAME_DATA is passed onto GamesList as a prop in the form of an array
//For next step, see GamesList