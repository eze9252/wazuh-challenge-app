import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AlertsContainer from './containers/alerts';
import AgentsContainer from './containers/agents';
import RulesContainer from './containers/rules';
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
              <Route exact path="/agents" component={AgentsContainer} />
              <Route exact path="/rules" component={RulesContainer} />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
