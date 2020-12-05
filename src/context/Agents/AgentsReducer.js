import { GET_AGENTS } from '../types'

export default (state, action) => {
    const { agents, type} = action;

    switch(type){
        case GET_AGENTS:
            return {
                ...state,
                agents: agents,
            };
        default:
            return state;
    }
};