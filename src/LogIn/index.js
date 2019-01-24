import React from 'react';
import SigninForm from './signinForm';
import {loginRequest, loginSuccess } from './action';
import  submitLogin  from './apiConnection';
import { connect } from 'react-redux';

class Signin extends React.Component{
  componentWillMount() {
    if (this.props.userInfo !== null) {
      // console.log(this.props.history);
      this.props.history.push('/login');
    }
  }
  constructor(props){
    super(props);
    const storedMessage = localStorage.getItem('suc cessmessage');
    let successmessage ='';

    if(storedMessage){
      successmessage = storedMessage;
      localStorage.removeItem('successmessage');
    }

    this.state ={
      errors: {},
      successmessage,
      isLoggedIn: false,
      ownDashboard: true,
      data: {
        email: '',
        password: ''
      },
      obj:{}
    };
  }

  
  componentWillReceiveProps(nextProps){
      if(nextProps.userInfo && nextProps.isLoggedIn){ 
          console.log("redirect to dashboard");
         if( nextProps.userInfo.user_role[0]==="superadmin"){
          this.props.history.push("/admin");
        } 
          else if( nextProps.userInfo.user_role[1]==="admin"){
            this.props.history.push("/user");
          }
          else
          this.props.history.push("/general");
        }console.log('redirection is successful');
  }



    login = (Data)=> { 
      console.log('.....data is feetching ')
        return submitLogin(Data).then(token => {
            this.props.loginSuccess(token);
        }).catch(error => {
            throw (error);
        });
}

  onSubmit = (event)=> {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if(Object.keys(errors).length === 0){
     this.login(this.state.data);
    }
  }

  validate = () => {
        const { data } = this.state;
        const errors = {};
        if (!data.email) errors.email = "email can't be empty"  ;
        this.ValidateEmail();
        if (!data.password) errors.password = "Password error";
        console.log('-----------',errors);
        return errors;
      };

   ValidateEmail = () => {
     const rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (rgx.test(this.state.data.email))
        {
          return (true)
        }
        alert("You have entered an invalid email address!")
            return (false)
        }

  onChange = (event)=> {
      const field = event.target.name;
      const data = this.state.data;
      data[field] = event.target.value;
      this.setState({
        data
      });
    }

      render() {
        return (
          <SigninForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            errors={this.state.errors}
            successMessage={this.state.successMessage}
            data={this.state.data}
          />
        ); 
      }
  
  }

  const mapStateToProps = (state) => {
    return {
      userInfo : state.userInfo,
      isLoggedIn:state.isLoggedIn
    }
  }
  const mapDispatchToProps = (dispatch) => {

    return {
      loginSuccess: (data) => dispatch(loginSuccess(data)),
      loginRequest: (email,password) => dispatch(loginRequest(email,password)),
     
       }
    }
    export default connect( mapStateToProps ,mapDispatchToProps)(Signin);





  // login = Data => {
  //   // this.props.loginSuccess(Data);
  //   if(Data.email === "autoncell@gmail.com" && Data.password === "Test@1234"){
  //     return this.props.history.push("/admin");
  //   }
  //   else if(Data.email === "sudrishya@gmail.com" && Data.password === "Test@1234"){
  //     return this.props.history.push("/user");
  //   }
  //   else if(Data.email === "general@gmail.com" && Data.password === "Test@1234"){
  //     return this.props.history.push("/general");
  //   }
  // };
    
      // if (Data[index].user_role[0] === "superadmin") {  
      //   return this.props.history.push("/admin");
      // } }else if (Data[index].user_role === "admin") {    
      //   return this.props.history.push("/user");
      // } else {
      //   return this.props.history.push("/general");
      // }
      // }

 