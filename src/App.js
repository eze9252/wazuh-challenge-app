import React, { useContext, useEffect } from 'react';

import alertsContext from './context/Alerts/AlertsContext'

const App = () => {

  const AlertsContext = useContext(alertsContext);

  useEffect(() => {
    AlertsContext.getAlerts();
  },[])
  
  return (
    <div className="App">
      {console.log(AlertsContext.alerts)}
    </div>
  );
}

export default App;
