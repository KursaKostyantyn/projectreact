import React, {Component} from 'react';

class User extends Component {

    constructor(props) {
        super(props);
        this.user = this.props.user;
    }

    render() {
        return (
            <div>
                <h2>{this.user.id}: {this.user.name}</h2>
                <p>{this.user.username}</p>
            </div>
        );
    }
}

export default User;