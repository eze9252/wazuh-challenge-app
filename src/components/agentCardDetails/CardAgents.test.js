import React from 'react';
import renderer from 'react-test-renderer';
import CardAgents from './index';

describe('Test Render Card details Agents', () => {

  const data = {
    agent : {
      "id": "007",
      "name": "Ubuntu",
      "ip": "47.204.15.21",
      "total_alerts": 12
    }
  }

  test('snapshot table renders', () => {
    const component = renderer.create(<CardAgents agent_details={data} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});