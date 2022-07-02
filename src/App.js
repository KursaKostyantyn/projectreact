import './App.css';

import {Comments, Users} from "./components";

function App() {
    return (
        <div className="App">
            <div>
                <h2>
                    Create new user
                </h2>
                <Users/>
            </div>
            <div>
                <h2>
                    Create new comment
                </h2>
                <Comments/>
            </div>
        </div>
    );
}

export default App;
