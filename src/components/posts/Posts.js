import React, {Component} from 'react';

import {PostApiService} from "../../services";
import Post from "./Post";

class Posts extends Component {
    state = {posts: []}

    constructor(props) {
        super(props);
        this.postApiService = new PostApiService();
    }

    componentDidMount() {
        this.postApiService.getAllPosts().then(posts => this.setState({posts: posts}))
    }

    render() {
        return (
            <div>
                {this.state.posts.map((post) => <Post key={post.id} post={post}/>)}
            </div>
        );
    }
}

export default Posts;