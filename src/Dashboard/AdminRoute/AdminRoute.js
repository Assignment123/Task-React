import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from './Admin';

class AdminRoute extends Component {
    render(){
        return(
    <Router>
            <Route path="/" component={Admin} />
    </Router>
    )
    }
}

export default AdminRoute;