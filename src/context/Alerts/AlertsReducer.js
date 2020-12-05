import { GET_ALERTS } from '../types'

export default (state, action) => {
    const { alerts, type} = action;

    switch(type){
        case GET_ALERTS:
            return {
                ...state,
                alerts: alerts,
            };
        default:
            return state;
    }
};