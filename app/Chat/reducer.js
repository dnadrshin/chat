import {createReducer} from '../helpers'
import actions from './actions'

const
    initialState = {
        messages: [
            {id: '1', userId: '1', text: 'hi'},
            {id: '2', userId: '2', text: 'hi!'},
            {id: '3', userId: '1', text: 'how are you'},
        ],
    }

export default (state = initialState, action = {}) => createReducer(state, action, {
    [actions.types.RECIEVE_MESSAGE]: () => ({
        ...state,
        messages: state.messages.concat({
            id: action.payload.id,
            userId: action.payload.senderId,
            text: action.payload.message
        }),
	}),
});
