import React from 'react';
import {connect} from 'react-redux';

const
    Messages = props => <div>
        {props.messages.map((message, i) => <div key={i}>{message.text}</div>)}
    </div>

export default connect(
    state => ({
        messages: state.chat.messages
    })
)(Messages);
