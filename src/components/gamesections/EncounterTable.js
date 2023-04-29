import Card from '../UI/Card'
import classes from './EncounterTable.module.css'

export default function EncounterTable(props){
    return(
        <Card>
            <div className={classes.content}>
                <h3>{props.title}</h3>
            </div>
        </Card>
    )
}