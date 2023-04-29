import classes from './GamesItem.module.css'
import Card from '../UI/Card'
import {Link} from 'react-router-dom';

export default function GamesItem(props){
    return(
        <Card>
            <Link to={props.path}>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                </div>
            </li>
            </Link>
        </Card>

    )
}

//GamesItem takes the props defined in GamesList and sets them to specific JSx elements which display the right type of information