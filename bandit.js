var BANDIT_URL = 'https://bandit.joitech.run';

var api = require('./api');

_headers = function(apiKey) {
  return {Authorization: `Token ${apiKey}`};
};

exports.choose = function(apiKey, branch) {
  var response = api.get(
    `${BANDIT_URL}/branch/${branch}/arm/select/`,
    _headers(apiKey),
  );
  var option = response.selected;
  api.post(`${BANDIT_URL}/log/${option}/impression/`, _headers(apiKey));
  return option;
};

exports.success = function(apiKey, option) {
  api.post(`${BANDIT_URL}/log/${option}/conversion/`, _headers(apiKey));
};
