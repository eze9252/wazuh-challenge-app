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
    },
    {
      "id": "003",
      "name": "ip-10-0-0-180.us-west-1.compute.internal",
      "ip": "10.0.0.180",
      "total_alerts": 13
    },
    {
      "id": "002",
      "name": "Amazon",
      "ip": "145.80.240.15",
      "total_alerts": 12
    },
    {
      "id": "001",
      "name": "RHEL7",
      "ip": "187.54.247.68",
      "total_alerts": 12
    },
    {
      "id": "005",
      "name": "Centos",
      "ip": "197.17.1.4",
      "total_alerts": 22
    },
    {
      "id": "006",
      "name": "Windows",
      "ip": "207.45.34.78",
      "total_alerts": 21
    },
    {
      "id": "004",
      "name": "Ubuntu",
      "ip": "47.204.15.21",
      "total_alerts": 8
    }
  ]

  test('snapshot table renders', () => {
    const component = renderer.create(<AgentsTable agents={data} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});