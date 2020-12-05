import { GET_ALERTS , GET_ALERTS_BY_ID } from '../types'

export default (state, action) => {
    const { alerts, alert, type} = action;

    switch(type){
        case GET_ALERTS:
            return {
                ...state,
                alerts: alerts,
            };
        case GET_ALERTS_BY_ID:
            return {
                ...state,
                alert: alert,
            };
        default:
            return state;
    }
};