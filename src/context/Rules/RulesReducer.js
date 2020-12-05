import { GET_RULES } from '../types'

export default (state, action) => {
    const { rules, type} = action;

    switch(type){
        case GET_RULES:
            return {
                ...state,
                rules: rules,
            };
        default:
            return state;
    }
};