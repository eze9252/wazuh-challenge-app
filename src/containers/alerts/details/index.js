import React, { useEffect, useContext } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import alertsContext from '../../../context/Alerts/AlertsContext'
import NavBar from '../../navbar'


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
    <div className="container-card">
        { Object.keys(AlertsContext.alert).length != 0 ? <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Details of Alert {}
            </Typography>
            <Typography color="textSecondary">
              Index: {AlertsContext.alert._index}
            </Typography>
            <Typography color="textSecondary">
              Score: {AlertsContext.alert._score}
            </Typography>
            <Typography color="textSecondary">
              Type: {AlertsContext.alert._type}
            </Typography>
            <Typography  color="textSecondary">
              Agent name: {AlertsContext.alert._source.agent.name} - Id:{' '}
              {AlertsContext.alert._source.agent.id}
            </Typography>
            <Typography  color="textSecondary">
              Cluster: {AlertsContext.alert._source.cluster.name}
            </Typography>
            <Typography color="textSecondary">
              Manager: {AlertsContext.alert._source.manager.name}
            </Typography>
            <Typography color="textSecondary">
              Rule: {AlertsContext.alert._source.rule.description} - Id:{' '}
              {AlertsContext.alert._source.rule.id}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" href="/">
              Back
            </Button>
          </CardActions>
        </Card> : ''
        }
    </div>
    </>
  )
}

export default AlertDetail;