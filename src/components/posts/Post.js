import React, {Component} from 'react';

class Post extends Component {

    constructor(props) {
        super(props);
        this.post=this.props.post
    }

    render() {

        return (
            <div>
               <h2>{this.post.id}: {this.post.title}</h2>
                <p>{this.post.body}</p>
            </div>
        );
    }
}

export default Post;