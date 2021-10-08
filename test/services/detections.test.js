const assert = require('assert');
const app = require('../../src/app');

describe('\'detections\' service', () => {
  it('registered the service', () => {
    const service = app.service('detections');

    assert.ok(service, 'Registered the service');
  });
});
