import React, { useContext, useEffect } from 'react';

import rulesContext from '../../context/Rules/RulesContext'
import NavBar from '../navbar'
import AlertsTable from '../../components/tableRules'

const Rules = () => {

  const RulesContext = useContext(rulesContext);

  useEffect(() => {
    RulesContext.getRules();
  },[])

  console.log(RulesContext)
  
  return (
    <div className="App">
      <header>
        <NavBar value={2}/>
      </header>
      <div className="container-fix">
        <AlertsTable rules={RulesContext.rules}/>
      </div>
    </div>
  );
}

export default Rules;
