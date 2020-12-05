import React, { useContext, useEffect } from 'react';

import agentsContext from '../../context/Agents/AgentsContext'
import AgentsTable from '../../components/tableAgents'
import NavBar from '../navbar'

const Agents = () => {

  const AgentsContext = useContext(agentsContext);

  useEffect(() => {
    AgentsContext.getAgents();
  },[])
  
  return (
    <div className="App">
      <header>
        <NavBar value={1}/>
      </header>
      <div className="container-fix">
        <AgentsTable agents={AgentsContext.agents}/>
      </div>
    </div>
  );
}

export default Agents;
