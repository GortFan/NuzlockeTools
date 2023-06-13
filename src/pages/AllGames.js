import GamesList from '../components/games/GamesList';

export default function AllGamesPage(props){
    return(
        <div>
            <GamesList games={props}/>
        </div>
    )
}