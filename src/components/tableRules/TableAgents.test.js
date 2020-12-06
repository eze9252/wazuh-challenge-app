import React from 'react';
import renderer from 'react-test-renderer';
import RulesTable from './index';

describe('Test Render Rules Agents', () => {

  const data = [
    {
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
    },
    {
      "firedtimes": 2,
      "mail": false,
      "level": 7,
      "pci_dss": [
        "11.5"
      ],
      "hipaa": [
        "164.312.c.1",
        "164.312.c.2"
      ],
      "description": "Integrity checksum changed.",
      "groups": [
        "ossec",
        "syscheck"
      ],
      "id": "550",
      "nist_800_53": [
        "SI.7"
      ],
      "gpg13": [
        "4.11"
      ],
      "gdpr": [
        "II_5.1.f"
      ],
      "total_alerts": 26
    },
    {
      "firedtimes": 2,
      "mail": false,
      "level": 7,
      "pci_dss": [
        "11.5"
      ],
      "hipaa": [
        "164.312.c.1",
        "164.312.c.2"
      ],
      "description": "File deleted.",
      "groups": [
        "ossec",
        "syscheck"
      ],
      "id": "553",
      "nist_800_53": [
        "SI.7"
      ],
      "gpg13": [
        "4.11"
      ],
      "gdpr": [
        "II_5.1.f"
      ],
      "total_alerts": 36
    }
  ]

  test('snapshot table renders', () => {
    const component = renderer.create(<RulesTable rules={data} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});