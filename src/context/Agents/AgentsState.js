import React, { useReducer } from "react";
import axios from 'axios';

import AgentsContext from "./AgentsContext";
import AgentsReducer from "./AgentsReducer";

import { GET_AGENTS, GET_AGENTS_BY_ID } from '../types'

const AgentsState = (props) => {
    let initialState = {
        agents: [],
        agent: {},
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

    const getAgentsById = (id) => {
        return axios.get('http://localhost:5000/agents/'+id).then((res) => {
            let { data } = res
            dispatch({ type: GET_AGENTS_BY_ID, agent: data})
        }).catch(err =>{
            console.log(err)
        })  
    }

    return(
        <AgentsContext.Provider value={{agents: state.agents, agent: state.agent ,getAgents, getAgentsById}}>
            {props.children}
        </AgentsContext.Provider>
    )
}

export default AgentsState