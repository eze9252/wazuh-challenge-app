import React, { useContext, useEffect } from 'react';
import 'zingchart/es6'
import ZingChart from 'zingchart-react'
import agentsContext from '../../context/Agents/AgentsContext'
import rulesContext from '../../context/Rules/RulesContext'
import NavBar from '../navbar'

const Dashboard = (props) => {

    const RulesContext = useContext(rulesContext);
    const AgentsContext = useContext(agentsContext);

    useEffect(() => {
      AgentsContext.getAgents();
      RulesContext.getRules();
    },[])

  const totalAlertsByAgent = AgentsContext.agents.map((agent) => {
    return { values: [agent.total_alerts], text: agent.name }
  })

  const totalAlertsByRule = RulesContext.rules.map((rules) => {
    return { values: [rules.total_alerts], text: rules.description }
  })

  const configBar = {
    legend: {
      draggable: true,
      'drag-handler': 'icon',
      icon: {
        'line-color': 'black',
      },
      x: '5%',
      y: '5%',
    },
    type: 'pie',
  }

  const configAgents = {
    title: {
      text: 'Total Alerts by Agent',
    },
    ...configBar,
    series: totalAlertsByAgent,
  }

  const configRules = {
    title: {
      text: 'Total Alerts by Rule',
    },
    ...configBar,
    series: totalAlertsByRule,
  }

  return (
    <>
        <header>
            <NavBar value={3}/>
        </header>
        <br/>
        <div className="padding-dashboard">
          <ZingChart data={configAgents} />
          <br/>
          <ZingChart data={configRules} />
        </div>
    </>
  )
}

export default Dashboard