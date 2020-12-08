import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'


const AlertCard = (props) => {

  return (
    <>
     <div className="container-card">
        { Object.keys(props.alert_details.alert).length != 0 ? <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Details of Alert: {props.alert_details.alert._id}
            </Typography>
            <Typography color="textSecondary">
              Index: {props.alert_details.alert._index}
            </Typography>
            <Typography color="textSecondary">
              Score: {props.alert_details.alert._score}
            </Typography>
            <Typography color="textSecondary">
              Type: {props.alert_details.alert._type}
            </Typography>
            <Typography  color="textSecondary">
              Agent name: {props.alert_details.alert._source.agent.name}
            </Typography>
            <Typography  color="textSecondary">
              Cluster: {props.alert_details.alert._source.cluster.name}
            </Typography>
            <Typography color="textSecondary">
              Manager: {props.alert_details.alert._source.manager.name}
            </Typography>
            <Typography color="textSecondary">
              Rule: {props.alert_details.alert._source.rule.description}
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

export default AlertCard;