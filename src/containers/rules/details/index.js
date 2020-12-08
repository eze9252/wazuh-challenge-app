import React, { useEffect, useContext } from 'react'
import rulesContext from '../../../context/Rules/RulesContext'
import RulesCard from '../../../components/rulesCardDetails'
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
        <RulesCard rule_details={RulesContext} />
    </header>
    </>
  )
}

export default RuleDetail;