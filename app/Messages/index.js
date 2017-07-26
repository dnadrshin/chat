import React from 'react';
import {connect} from 'react-redux';

const
    Messages = props => <div>
        {props.messages}
    </div>

export default connect(
    state => ({
        messages: state.messages
    })
)(Messages);
