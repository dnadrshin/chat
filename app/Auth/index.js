import React from 'react';
import {connect} from 'react-redux'
import {compose} from 'recompose'

const
    Auth = props => <div>
        {props.isAuth ? <div>user name</div>

        :<div>
            <div>
                <label>name</label>
                <input/>
                <label>pass</label>
                <input/>
            </div>

            <div>
                <button>fb</button>
                <button>twitter</button>
            </div>
        </div>}
    </div>;

export default compose(
    connect(
        state => ({
            isAuth: state.auth.isAuth,
            name: state.auth.name
        })
    )
)(Auth)
