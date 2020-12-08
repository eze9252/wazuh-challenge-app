import React from 'react';
import renderer from 'react-test-renderer';
import CardRule from './index';

describe('Test Render Card details Alerts', () => {

  const data = {
    rule : {
      "firedtimes": 1,
      "mail": false,
      "level": 5,
      "pci_dss": [
        "11.5"
      ],
      "hipaa": [
        "164.312.c.1",
        "164.312.c.2"
      ],
      "description": "File added to the system.",
      "groups": [
        "ossec",
        "syscheck"
      ],
      "id": "554",
      "nist_800_53": [
        "SI.7"
      ],
      "gpg13": [
        "4.11"
      ],
      "gdpr": [
        "II_5.1.f"
      ],
      "total_alerts": 38
    }
  }

  test('snapshot table renders', () => {
    const component = renderer.create(<CardRule rule_details={data} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});