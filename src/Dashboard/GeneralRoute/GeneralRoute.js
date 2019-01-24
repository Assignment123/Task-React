import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import General from './General';

class GeneralRoute extends Component {
    render(){
        return(
    <Router>
            <Route path="/" component={General} />
    </Router>
    )
    }
}
export default GeneralRoute;