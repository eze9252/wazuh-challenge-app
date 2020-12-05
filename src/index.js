import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AlertsContainer from './containers/alerts';
import AlertsContainerDetail from './containers/alerts/details';
import AgentsContainer from './containers/agents';
import AgentsContainerDetail from './containers/agents/details';
import RulesContainer from './containers/rules';
import RulesContainerDetail from './containers/rules/details';
import Dashboard from './containers//dashboard';
import AlertsState from './context/Alerts/AlertsState';
import AgentsState from './context/Agents/AgentsState';
import RulesState from './context/Rules/RulesState';
import reportWebVitals from './reportWebVitals';
import createStoreProvider from './store';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();


const StoreProvider = createStoreProvider([
    AlertsState,
    AgentsState,
    RulesState,
]);

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router history={history}>
              <Route exact path="/" component={AlertsContainer} />
              <Route exact path="/alert/:id" component={AlertsContainerDetail} />
              <Route exact path="/agents" component={AgentsContainer} />
              <Route exact path="/agents/:id" component={AgentsContainerDetail} />
              <Route exact path="/rules" component={RulesContainer} />
              <Route exact path="/rules/:id" component={RulesContainerDetail} />
              <Route exact path="/dashboard" component={Dashboard} />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
