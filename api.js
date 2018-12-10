var DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Origin: '',
};

exports.post = function(url, headers = {}, data = {}) {
  httpClient.request({
    url: url,
    method: 'POST',
    headers: Object.assign({}, DEFAULT_HEADERS, headers),
    data: JSON.stringify(data),
  });
};

exports.get = function(url, headers = {}, params = {}) {
  httpClient.request({
    url: url,
    method: 'GET',
    headers: Object.assign({}, DEFAULT_HEADERS, headers),
    params: params,
  });
};
