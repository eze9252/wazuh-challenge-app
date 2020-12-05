import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

const NavBar = (props) => {
  const classes = useStyles()
  const handleOnClick = (url) => window.location = url

  return (
    <>
      <Paper className={classes.root}>
        <img
          className="logo"
          src="https://wazuh.com/wp-content/themes/wazuh/assets/images/wazuh_logo.svg"
        />
        <Tabs
          value={props.value}
          indicatorColor="primary"
          textColor="primary"
          centered>
          <Tab label="Alerts" onClick={() => handleOnClick('/')} />
          <Tab label="Agents" onClick={() => handleOnClick('/agents')} />
          <Tab label="Rules" onClick={() => handleOnClick('/rules')} />
          <Tab label="Dashboard" onClick={() => handleOnClick('/dashboard')} />
        </Tabs>
      </Paper>
    </>
  )
}

export default NavBar