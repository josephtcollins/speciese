import React, { PropTypes } from 'react';
import SignUpForm from './signup/SignUpForm';
import TopBar from './topbar/topbar';

export default class SignUpPage extends React.Component {

  constructor(props) {
    super(props);

    // initial state
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    };
    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({user});
  }

  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const name = encodeURIComponent(this.state.user.name);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `name=${name}&email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        console.log('The form is valid');
      } else {
        // failure
        // TODO can't find error

        // const errors = xhr.response.errors ? xhr.response.errors : {};
        // errors.summary = xhr.response.message;
        //
        // this.setState({
        //   errors
        // });
      }
    });
    xhr.send(formData);
  }

  render() {
    return (
      <div>
      <TopBar />
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
      </div>
    )
  }
}
