import React from 'react';
import renderer from 'react-test-renderer';
import CardAlerts from './index';

describe('Test Render Card details Alerts', () => {

  const data = {
    alert : {
      "_index": "wazuh-alerts-4.x-sample-security",
      "_type": "_doc",
      "_id": "4HGmr3QB4YtWQbLv1inX",
      "_score": 1,
      "_source": {
        "@sampledata": true,
        "timestamp": "2020-09-20T04:59:28.707+0000",
        "rule": {
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
        },
        "agent": {
          "id": "007",
          "name": "Debian",
          "ip": "24.273.97.14"
        },
        "manager": {
          "name": "wazuh-master"
        },
        "cluster": {
          "name": "wazuh"
        },
        "id": "1580123327.49031",
        "predecoder": {
          
        },
        "decoder": {
          
        },
        "data": {
          
        },
        "location": "",
        "syscheck": {
          "event": "deleted",
          "path": "/etc/elasticsearch/elasticsearch.yml",
          "uname_after": "NETWORK Service",
          "gname_after": "root",
          "mtime_after": "2020-09-17T18:45:08.960Z",
          "size_after": 35,
          "uid_after": "S-1-5-19",
          "gid_after": "22",
          "perm_after": "rw-r--r--",
          "inode_after": 31866,
          "tags": [
            "tmp"
          ],
          "sha1_after": "ca418b1e5eeaf72b5de9ab1200dba7ee74696856",
          "audit": {
            "process": {
              "name": "/home/user/sample",
              "id": 44889,
              "ppid": 97006
            },
            "effective_user": {
              "name": "NETWORK Service",
              "id": 39
            },
            "user": {
              "name": "SYSTEM",
              "id": 43
            },
            "group": {
              "name": "ec2-user",
              "id": 22
            }
          },
          "md5_after": "82d296600d8f325a02513e776582f4ba",
          "sha256_after": "dcc7f35d252bbd2af4f8d3191ff64435df200b78cc4cbebdd6b6bdf9d307"
        }
      }
    }
  }

  test('snapshot table renders', () => {
    const component = renderer.create(<CardAlerts alert_details={data} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});