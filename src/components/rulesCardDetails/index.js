import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'


const RuleCard = (props) => {

  return (
    <>
    <div  className="container-card">
       { Object.keys(props.rule_details.rule).length != 0 ? <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Details of rule {props.rule_details.rule.id}
            </Typography>
            <Typography color="textSecondary">
              description: {props.rule_details.rule.description}
            </Typography>
            <Typography color="textSecondary">
              firedtimes: {props.rule_details.rule.firedtimes}
            </Typography>
            <Typography color="textSecondary">
              Total alerts: {props.rule_details.rule.total_alerts}
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

export default RuleCard;