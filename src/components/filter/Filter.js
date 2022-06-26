import {Ships} from "../ships/Ships";
import {useState} from "react";


function Filter() {
    let [state, setState] = useState({year: null, includes: null})

    return (
        <div>
            <button onClick={() => {

                setState({year: 2020, includes: false})

            }}>
                exlude 2020
            </button>

            <button onClick={() =>

                setState({year: 2020, includes: true})

            }>
                only 2020
            </button>

            <Ships chosenYear={state.year} includes={state.includes}/>

        </div>
    )
}

export {Filter}