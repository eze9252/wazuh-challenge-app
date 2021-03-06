import React from 'react';
import renderer from 'react-test-renderer';
import AgentsTable from './index';

describe('Test Render Table Agents', () => {

  const data = [
    {
      "id": "007",
      "name": "Ubuntu",
      "ip": "47.204.15.21",
      "total_alerts": 12
    }
  ]

  test('snapshot table renders', () => {
    const component = renderer.create(<AgentsTable agents={data} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});