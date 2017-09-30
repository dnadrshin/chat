import React from 'react';
import { connect } from 'react-redux';

const
  UserName = props => <div>
    <div>username {props.userName}</div>
  </div>;

export default connect(
  state => ({
    userName: state.auth.name,
  }),
)(UserName);
