import React, { useReducer } from "react";
import axios from 'axios';

import RulesContext from "./RulesContext";
import RulesReducer from "./RulesReducer";

import { GET_RULES, GET_RULES_BY_ID } from '../types'

const RulesState = (props) => {
    let initialState = {
        rules: [],
        rule: {},
    }

    const [state, dispatch] = useReducer(RulesReducer, initialState);

    const getRules = () => {
            return axios.get('http://localhost:5000/rules?offset=0&limit=20').then((res) => {
                let { data } = res.data
                dispatch({ type: GET_RULES, rules: data})
            }).catch(err =>{
                console.log(err)
            })  
    }

    const getRulesById = (id) => {
        return axios.get('http://localhost:5000/rules/'+id).then((res) => {
            let { data } = res
            dispatch({ type: GET_RULES_BY_ID, rule: data})
        }).catch(err =>{
            console.log(err)
        })  
}

    return(
        <RulesContext.Provider value={{rules: state.rules , rule: state.rule, getRules, getRulesById}}>
            {props.children}
        </RulesContext.Provider>
    )
}

export default RulesState