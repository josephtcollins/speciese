import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <div>
  <form action="/" onSubmit={onSubmit}>

    <div className="container">
      <h2>Login</h2>
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <label><b>Email</b></label>
      <input type="text" onChange={onChange} placeholder="Enter email" name="email" required />

      <label><b>Password</b></label>
      <input type="password" onChange={onChange} placeholder="Enter Password" name="password" required />

      <div className="clearfix">
        <button type="button" className="cancelbtn">Cancel</button>
        <button type="submit" className="signupbtn">Log in</button>
      </div>
    </div>
  </form>
</div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
