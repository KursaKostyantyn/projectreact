import React, {Component} from 'react';

import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

class App extends Component {
    render() {
        return (
            <div>

                <Users/>/
                <Posts/>
                <Comments/>
            </div>
        );
    }
}

export default App;