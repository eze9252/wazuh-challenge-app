import React, { useEffect, useContext } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import rulesContext from '../../../context/Rules/RulesContext'
import NavBar from '../../navbar'

const RuleDetail = (props) => {
  const RulesContext = useContext(rulesContext);

  useEffect(() => {
    RulesContext.getRulesById(props.match.params.id);
  }, [])

  return (
    <>
    <header>
        <NavBar value={2}/>
    </header>
    <div  className="container-card">
       { Object.keys(RulesContext.rule).length != 0 ? <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Details of rule {RulesContext.rule.id}
            </Typography>
            <Typography color="textSecondary">
              description: {RulesContext.rule.description}
            </Typography>
            <Typography color="textSecondary">
              firedtimes: {RulesContext.rule.firedtimes}
            </Typography>
            <Typography color="textSecondary">
              Total alerts: {RulesContext.rule.total_alerts}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" href="/rules">
              Back
            </Button>
          </CardActions>
        </Card> : ''
        }
    </div>
    </>
  )
}

export default RuleDetail;