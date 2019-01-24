import { LOGGED_IN } from '../../LogIn/reducers';
class EnsureLoggedIn extends React.Component {
    componentDidMount() {
      const { dispatch, currentURL } = this.props
  
      if (!LOGGED_IN) {
        dispatch(setRedirectUrl(currentURL))
        browserHistory.replace("/login")
      }
    }
  
    render() {
      if (LOGGED_IN) {
        return this.props.children
      } else {
        return null
      }
    }
  }
 
  function mapStateToProps(state, ownProps) {
    return {
      LOGGED_IN: state.loggedIn,
      currentURL: ownProps.location.pathname
    }
  }
  
  export default connect(mapStateToProps)(EnsureLoggedIn)