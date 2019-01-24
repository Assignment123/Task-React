import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; //with router gives you the access to history objects
import { LOGGED_IN } from "../../LogIn/reducers";
import { Link } from "react-router-dom";

class AuthenticatedComponent extends Component {
  componentWillMount() {
    const { userInfo } = this.props;
    if (!userInfo) {
      this.props.history.push("/login");
    }
  }
  render() {
    const { userInfo, children } = this.props;

    return (
      <div>
        {userInfo && Object.keys(userInfo).length > 0 ? (children):(<Link to="/login" />)}
        {/* <p>You must log in to view the page </p>
          <button onClick={this.login}>Log in
            <Link to ="/login"> </Link>      
          </button> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}
export default withRouter(connect(mapStateToProps)(AuthenticatedComponent));
