import React from 'react';


export default class Login extends React.Component {
  render() {
    return (
      <div>
      <h2>Signup Form</h2>
      <form>
        <div className="container">
          <label><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <div className="clearfix">
            <button type="button" className="cancelbtn">Cancel</button>
            <button type="submit" className="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
    )  
  }
  _login(username, password) {
    return null;
  }
}
