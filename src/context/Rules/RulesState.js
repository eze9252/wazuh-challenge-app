import React, { useReducer } from "react";
import axios from 'axios';

import RulesContext from "./RulesContext";
import RulesReducer from "./RulesReducer";

import { GET_RULES } from '../types'

const RulesState = (props) => {
    let initialState = {
        rules: [],
    }

    const [state, dispatch] = useReducer(RulesReducer, initialState);

    const getRules = () => {
            return axios.get('http://localhost:5000/rules?offset=0&limit=20').then((res) => {
                let { data } = res.data
                console.log(res.data)
                dispatch({ type: GET_RULES, rules: data})
            }).catch(err =>{
                console.log(err)
            })  
    }

    return(
        <RulesContext.Provider value={{rules: state.rules , getRules}}>
            {props.children}
        </RulesContext.Provider>
    )
}

export default RulesState