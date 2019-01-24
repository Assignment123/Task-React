import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from './User';

class UserRoute extends Component {
    render(){
        return(
    <Router>
            <Route path="/" component={User} />
    </Router>
    )
    }
}

export default UserRoute;