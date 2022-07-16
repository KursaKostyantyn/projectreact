import React, {Component} from 'react';

class Comment extends Component {

    render() {

        const {id, body} = this.props.comment;

        return (
            <div>
                <p>{id}--{body}</p>
            </div>
        );
    }
}

export {Comment};