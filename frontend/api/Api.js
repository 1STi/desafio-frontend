import Axios from 'axios';
import Qs from 'qs';

const makeBaseUrl = (payload = '') =>
  `https://query.yahooapis.com/v1/public/yql${payload.query}`;

const paramsSerialize = params =>
  Qs.stringify(params, { arrayFormat: 'brackets' });

export default function(options = {}) {
  let headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers':'*',
    'Access-Control-Allow-Origin' : 'https://query.yahooapis.com/',
    'X-Requested-With': 'XMLHttpRequest'
  };
  const request = (url, method, data, params) => {
		const Promise = Axios({
			method,
			url: makeBaseUrl(url),
			params,
			data,
			headers,
			paramsSerialize
		})
    return Promise
              .then(res => res.data)
              .catch(err => err);
	};
	return {
	  get: (url, options = {}) => request(url, 'GET', null, options),
    post: (url, options = {}) => request(url, 'POST', options),
    put: (url, options = {}) => request(url, 'PUT', options),
    del: (url, options = {}) => request(url, 'DELETE', options),
    patch: (url, options = {}) => request(url, 'PATCH', options),
    // TODO: I need to think in a better solution for avoid inject the call
    // of function like parameter
    prepareGetCity: url => () => Axios.get(makeBaseUrl(url))
	}
}
