import React, { useEffect, useContext } from 'react'
import alertsContext from '../../../context/Alerts/AlertsContext'
import CardAlert from '../../../components/alertsCardDetails'
import NavBar from '../../navbar'
import AlertsCard from '../../../components/alertsCardDetails';


const AlertDetail = (props) => {
  const AlertsContext = useContext(alertsContext);

  useEffect(() => {
    AlertsContext.getAlertsById(props.match.params.id);
  }, [])
  return (
    <>
    <header>
        <NavBar value={0}/>
    </header>
    <AlertsCard alert_details={AlertsContext} />
    </>
  )
}

export default AlertDetail;