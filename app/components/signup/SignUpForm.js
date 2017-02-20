import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <div>
  <form action="/" onSubmit={onSubmit}>

    <div className="container">
      <h2>Signup Form</h2>
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <label><b>Email</b></label>
      <input type="text" errorText={errors.name} onChange={onChange} placeholder="Enter Email" name="email" required />

      <label><b>Password</b></label>
      <input type="password" onChange={onChange} placeholder="Enter Password" name="psw" required />

      <label><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
      <input type="checkbox" onChange={onChange} checked="checked" /> Remember me
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

      <div className="clearfix">
        <button type="button" className="cancelbtn">Cancel</button>
        <button type="submit" className="signupbtn">Sign Up</button>
      </div>
    </div>
  </form>
</div>

);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
