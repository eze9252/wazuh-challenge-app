import React, { useReducer } from "react";
import axios from 'axios';

import AgentsContext from "./AgentsContext";
import AgentsReducer from "./AgentsReducer";

import { GET_AGENTS } from '../types'

const AgentsState = (props) => {
    let initialState = {
        agents: [],
    }

    const [state, dispatch] = useReducer(AgentsReducer, initialState);

    const getAgents = () => {
            return axios.get('http://localhost:5000/agents?offset=0&limit=20').then((res) => {
                let { data } = res.data
                dispatch({ type: GET_AGENTS, agents: data})
            }).catch(err =>{
                console.log(err)
            })  
    }

    return(
        <AgentsContext.Provider value={{agents: state.agents ,getAgents}}>
            {props.children}
        </AgentsContext.Provider>
    )
}

export default AgentsState