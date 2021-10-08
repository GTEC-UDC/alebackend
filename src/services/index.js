const detections = require('./detections/detections.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(detections);
};
