import { GET_RULES, GET_RULES_BY_ID } from '../types'

export default (state, action) => {
    const { rules, rule, type} = action;

    switch(type){
        case GET_RULES:
            return {
                ...state,
                rules: rules,
            };
        case GET_RULES_BY_ID:
            return {
                ...state,
                rule: rule,
            };  
        default:
            return state;
    }
};