import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { UserEntry } from './UserEntry';

export class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      usernameText: '',
      passwordText: '',
    };
  }

  componentWillMount() {
    this.validateUserSignup = this.validateUserSignup.bind(this);
    this.validateUserLogin = this.validateUserLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleUserTextChange = this.handleUserTextChange.bind(this);
    this.handlePasswordTextChange = this.handlePasswordTextChange.bind(this);
  }

  handleClick() {
    this.setState({
      login: !this.state.login,
    });
  }

  handleUserTextChange(e) {
    this.setState({
      usernameText: e.target.value,
    });
  }

  handlePasswordTextChange(e) {
    this.setState({
      passwordText: e.target.value,
    });
  }

  // Pass down clickhandler to Login

  validateUserLogin() {
    this.props.route.mainSocket.emit('validateUserLogin', { username: this.state.usernameText, password: this.state.passwordText });
  }

  validateUserSignup() {
    this.props.route.mainSocket.emit('validateUserSignup', { username: this.state.usernameText, password: this.state.passwordText });
  }

  render() {
    const authStyle = {
      'width': '100%',
      'height': '100%',
      'text-align': 'center'
    };


    // const login = (
    //   <Login
    //     validateUserLogin={this.validateUserLogin}
    //     signUp={this.handleClick}
    //   />
    // );

    // const signup = (
    //   <SignUp
    //     validateUserSignup={this.validateUserSignup}
    //     logIn={this.handleClick}
    //   />
    // );

    // const pageToRender = !!this.state.login ? login : signup;

    return (

      <div className="loginClass" style={authStyle}>
        <div>
          <h1> TRAVEL CHUMS </h1>
          <p> Never Travel Alone </p>
        </div>
        <h4><b>Sign in with facebook</b></h4>
        <button>
          <a href="/auth/facebook">
            <img src="http://i.stack.imgur.com/Vk9SO.png"/> 
          </a>
        </button>
      </div>
      
    );
  }
}


      
      // <div class="homepage-hero-module">
      //   <div class="video-container">
      //       <div class="filter"></div>
      //       <video autoplay loop class="fillWidth">
      //           <source src="PATH_TO_MP4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
      //           <source src="PATH_TO_WEBM" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
      //       </video>
      //       <div class="poster hidden">
      //           <img src="PATH_TO_JPEG" alt="">
      //       </div>
      //   </div>
      // </div>
