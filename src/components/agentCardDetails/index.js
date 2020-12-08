import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'


const AgentCard = (props) => {

  return (
    <>
    <div  className="container-card">
        { Object.keys(props.agent_details.agent).length != 0 ? <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Details of agent {props.agent_details.agent.id}
            </Typography>
            <Typography color="textSecondary">
              name: {props.agent_details.agent.name}
            </Typography>
            <Typography color="textSecondary">
              ip: {props.agent_details.agent.ip}
            </Typography>
            <Typography color="textSecondary">
              Total alerts: {props.agent_details.agent.total_alerts}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" href="/agents">
              Back
            </Button>
          </CardActions>
        </Card> : ''
        }
    </div>
    </>
  )
}

export default AgentCard;