import React, { useReducer } from "react";
import axios from 'axios';

import AlertsContext from "./AlertsContext";
import AlertsReducer from "./AlertsReducer";

import { GET_ALERTS } from '../types'

const AlertsState = (props) => {
    let initialState = {
        alerts: [],
    }

    const [state, dispatch] = useReducer(AlertsReducer, initialState);

    const getAlerts = () => {
            return axios.get('http://localhost:5000/alerts?offset=0&limit=100').then((res) => {
                let { data } = res.data
                dispatch({ type: GET_ALERTS, alerts: data})
            }).catch(err =>{
                console.log(err)
            })  
    }

    return(
        <AlertsContext.Provider value={{alerts: state.alerts ,getAlerts}}>
            {props.children}
        </AlertsContext.Provider>
    )
}

export default AlertsState