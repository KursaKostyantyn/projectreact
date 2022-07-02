
import './App.css';
import {Posts, Users} from "./components";
import {useState} from "react";
import {getPosts} from "./services/users.api.service";

function App() {
    const[posts,setPosts]=useState([])

const showPosts= (id)=>{
        getPosts(id).then(({data})=>setPosts([...data]))
    }

  return (
    <div className="App">
        <div className={'left'}>
            <Users
                showPosts={showPosts}
            />
        </div>
        <div className={'right'}>
            <Posts posts={posts}/>

        </div>

    </div>
  );
}

export default App;
