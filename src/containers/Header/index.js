import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <span className="navbar-brand mb-0 h1">Session Manager</span>
      </nav>
    );
  }
}

export default connect(
  null,
  null
)(Header);
