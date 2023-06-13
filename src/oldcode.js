import EncounterTable from '../components/gamesections/EncounterTable'
import { initializeApp } from "firebase/app"
import { useState } from 'react';
import * as rtdb from "firebase/database";

export default function GamePage(props){
    
    const [data, setData] = useState("");

    const firebaseConfig = {
        apiKey: "AIzaSyDZJq4A0mqRYTGmIh0W2t37JQguXgv9AIU",
        authDomain: "nuzlocketool.firebaseapp.com",
        databaseURL: "https://nuzlocketool-default-rtdb.firebaseio.com",
        projectId: "nuzlocketool",
        storageBucket: "nuzlocketool.appspot.com",
        messagingSenderId: "732817109370",
        appId: "1:732817109370:web:f58b28ee3c6590bc73a6c3",
        measurementId: "G-CR12JDCMMS"
    };


    const app = initializeApp(firebaseConfig);
    let db = rtdb.getDatabase(app);
    const ref = rtdb.ref(db, "/areas");
    rtdb.get(ref).then((ss) => {
        setData(JSON.stringify(ss.val()));
    });

    function handleSubmit(e) {
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());

        //only need the route name for the key name
        const area_name = formJson.name;
        delete formJson.name;

        const arr = formJson.team.split(", ");
        formJson.team = arr;

        let ref = rtdb.ref(db, "/areas/" + area_name);

        //surely this does not generate the same number twice....add a check later
        const id = Math.floor(Math.random() * (9999999) + 1);

        rtdb.update(ref, {[id]: formJson})
        //console.log("submitted", formJson);

      }

    return(
        <div>
            <form method="post" onSubmit={handleSubmit}>
                <label>
                    Area name: <input name="name" defaultValue="swag" />
                </label>
                <hr />
                <label>
                    Trainer name: <input name="trainer" defaultValue="swag" />
                </label>
                <hr />
                <label>
                    Team: <input name="team" defaultValue="swag" />
                </label>
                <hr />
                <hr />
                <label>
                    Badges Needed: <input name="badges_needed" defaultValue="0" />
                </label>
                <hr />
                <p>
                    Radio buttons:
                    <label>
                    <input type="radio" name="type" value="normal" defaultChecked={true}/>
                    normal
                    </label>
                    <label>
                    <input type="radio" name="type" value="rematch" />
                    rematch
                    </label>
                    <label>
                    <input type="radio" name="type" value="gym" />
                    gym
                    </label>
                </p>
                <button type="submit">Submit</button>
            </form>
            <br></br>
            <EncounterTable data={data}/>
        </div>

    )
}