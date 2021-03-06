import React, { useReducer } from "react";
import axios from 'axios';

import AlertsContext from "./AlertsContext";
import AlertsReducer from "./AlertsReducer";

import { GET_ALERTS, GET_ALERTS_BY_ID } from '../types'

const AlertsState = (props) => {
    let initialState = {
        alerts: [],
        alert: {},
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

    const getAlertsById = (id) => {
        return axios.get('http://localhost:5000/alerts?offset=0&limit=100&id='+id).then((res) => {
            let { data } = res.data
            dispatch({ type: GET_ALERTS_BY_ID, alert: data[0]})
        }).catch(err =>{
            console.log(err)
        })  
}

    return(
        <AlertsContext.Provider value={{alerts: state.alerts , alert: state.alert, getAlerts , getAlertsById}}>
            {props.children}
        </AlertsContext.Provider>
    )
}

export default AlertsState