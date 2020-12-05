import React, { useContext, useEffect } from 'react';

import alertsContext from '../../context/Alerts/AlertsContext'
import NavBar from '../navbar'
import AlertsTable from '../../components/tableAlerts'

const Alert = () => {

  const AlertsContext = useContext(alertsContext);

  useEffect(() => {
    AlertsContext.getAlerts();
  },[])
  
  return (
    <div className="App">
      <header>
        <NavBar value={0}/>
      </header>
      <div className="container-fix">
        <AlertsTable alerts={AlertsContext.alerts}/>
      </div>
    </div>
  );
}

export default Alert;
