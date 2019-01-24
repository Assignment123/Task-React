import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./AdminRoute/Admin";
import User from "./UserRoute/User";
import General from "./GeneralRoute/General";
import SigninForm from "../LogIn/index";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import AuthenticationComponent from "./Components/AuthenticationComponent";

class MainRoute extends Component {
  componentWillMount() {
    const { userInfo } = this.props;
    if (!userInfo) {
      this.props.history.push("/login");
    }
  }
  render() {
    const { userInfo } = this.props;

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={SigninForm} />
          </Switch>

          <AuthenticationComponent>
            <Route exact path="/admin" component={Admin} />
          </AuthenticationComponent>

          <Route exact path="/user" component={User} />

          <Route exact path="/general" component={General} />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  userInfo: state.userInfo
});

export default connect(
  mapStateToProps,
  null
)(MainRoute);
