import {useEffect, useState} from "react";
import {Ship} from "../ship/Ship";

function Ships({chosenYear, includes}) {
    const [ships, setShips] = useState([])

    useEffect(() => {
            if (includes) {
                fetch('https://api.spacexdata.com/v3/launches/')
                    .then(response => response.json())
                    .then(value => {
                        setShips(value.filter(ship => ship.launch_year === chosenYear.toString()))
                    })

            }
            if (!includes && includes !== null) {

                fetch('https://api.spacexdata.com/v3/launches/')
                    .then(response => response.json())
                    .then(value => {
                        setShips(value.filter(ship => ship.launch_year !== chosenYear.toString()))
                    })

            }


        }
        , [chosenYear, includes])

    return (
        <div>

            {
                ships.map(((ship, index) => <Ship key={index} ship={ship}/>))
            }

        </div>
    )
}

export {Ships}