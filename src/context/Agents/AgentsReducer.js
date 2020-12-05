import { GET_AGENTS, GET_AGENTS_BY_ID } from '../types'

export default (state, action) => {
    const { agents, agent, type} = action;

    switch(type){
        case GET_AGENTS:
            return {
                ...state,
                agents: agents,
            };
        case GET_AGENTS_BY_ID:
                return {
                    ...state,
                    agent: agent,
                };
        default:
            return state;
    }
};