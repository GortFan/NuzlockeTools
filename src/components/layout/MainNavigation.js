import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

export default function MainNavigation(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Nuzlocke Tools</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Games</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}