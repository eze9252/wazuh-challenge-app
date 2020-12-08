import React, { useEffect, useContext } from 'react'
import agentsContext from '../../../context/Agents/AgentsContext'
import AgentCard from '../../../components/agentCardDetails'
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
    <AgentCard agent_details={AgentsContext} />
    </>
  )
}

export default AgentDetail;