import './App.css';
import {Link, Route, Routes} from "react-router-dom";

import HomePage from "./pages/homePage";
import TodosPage from "./pages/todosPage";
import AlbumsPage from "./pages/albumsPage";
import CommentsPage from "./pages/commentsPage";
import LayoutPage from "./pages/layoutPage";
import AboutPage from "./pages/aboutPage";
import PostPage from "./pages/postPage";

function App() {
    return (
        <div className="App">
            <div>
                <h2>Menu</h2>
                <ul>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/layout'}>layout</Link></li>
                    <li><Link to={'/about'}>about</Link></li>

                </ul>
            </div>
            <div>
                <h2>content</h2>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/layout'} element={<LayoutPage/>}>
                        <Route path={'todos'} element={<TodosPage/>}/>
                        <Route path={'albums'} element={<AlbumsPage/>}/>
                        <Route path={'comments'} element={<CommentsPage/>}>
                            <Route path={'post/:postId'} element={<PostPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'/about'} element={<AboutPage/>}/>

                </Routes>
            </div>

        </div>
    );
}

export default App;
