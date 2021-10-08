// Initializes the `detections` service on path `/detections`
const { Detections } = require('./detections.class');
const createModel = require('../../models/detections.model');
const hooks = require('./detections.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/', new Detections(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('detections');

  service.hooks(hooks);
};
