import React, { useEffect, useContext } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import agentsContext from '../../../context/Agents/AgentsContext'
import NavBar from '../../navbar'


const AgentDetail = (props) => {
  const AgentsContext = useContext(agentsContext);

  useEffect(() => {
    AgentsContext.getAgentsById(props.match.params.id);
  }, [])
   console.log(AgentsContext)
  return (
    <>
    <header>
        <NavBar value={1}/>
    </header>
    <div  className="container-card">
        { Object.keys(AgentsContext.agent).length != 0 ? <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Details of agent {AgentsContext.agent.id}
            </Typography>
            <Typography color="textSecondary">
              name: {AgentsContext.agent.name}
            </Typography>
            <Typography color="textSecondary">
              ip: {AgentsContext.agent.ip}
            </Typography>
            <Typography color="textSecondary">
              Total alerts: {AgentsContext.agent.total_alerts}
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

export default AgentDetail;