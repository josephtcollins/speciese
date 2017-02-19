import React from 'react';

export default class TopBar extends React.Component {
  render() {
    return (
      <ul className="topnav" id="myTopnav">
        <li><a href="#">Explore</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#account">Account</a></li>
      </ul>
    )
  }
}
