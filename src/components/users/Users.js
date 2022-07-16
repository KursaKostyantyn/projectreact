import React, {Component} from 'react';

import {UserApiService} from "../../services";
import User from "./User";

class Users extends Component {
    state = {users: []}

    constructor(props) {
        super(props);
        this.userApiService = new UserApiService();
    }

    componentDidMount() {
        this.userApiService.getAllUsers().then(value => this.setState({users: value}));
    }

    render() {
        return (
            <div>
                {this.state.users.map(user => <User key={user.id} user={user}/>)}
            </div>
        );
    }
}

export default Users;