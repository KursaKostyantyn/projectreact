import React, {Component} from 'react';

import {CommentApiService} from "../../services";
import {Comment} from "./Comment";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.axiosSrevice = new CommentApiService();
        this.state = {comments: []}
    }

    componentDidMount() {
        this.axiosSrevice.getAllComments().then(({data}) => this.setState({comments: data}))
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        );
    }
}

export default Comments;