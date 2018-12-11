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
  return option;
};

exports.logState = function(apiKey, state, option) {
  if (contact.vars._bandit) {
    contact.vars._bandit[state] = option;
  } else {
    contact.vars._bandit = {[state]: option};
  }
  api.post(`${BANDIT_URL}/log/${option}/impression/`, _headers(apiKey));
};

exports.success = function(apiKey, state) {
  option = contact.vars._bandit[state];
  api.post(`${BANDIT_URL}/log/${option}/conversion/`, _headers(apiKey));
};
