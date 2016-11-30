import Axios from 'axios';
import Qs from 'qs';
function makeBaseUrl(location, unit = 'c') {
  const queryUri = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where u="c" AND woeid in (select woeid from geo.places(1) where text="tehran")&format=json';
  // const queryUri = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where u=${unit} AND woeid in (select woeid from geo.places(1) where text=${location})&format=json`;
  console.log(queryUri);
  return queryUri;
}
export default function(options = {}) {
	function request(url, method, data, params) {
    let headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers':'*',
      'Access-Control-Allow-Origin' : 'https://query.yahooapis.com/',
      'X-Requested-With': 'XMLHttpRequest'
    };
		return Axios({
			method: method,
			url: makeBaseUrl(url),
			params: params,
			data: data,
			headers: headers,
			paramsSerialize: function(params) {
				return Qs.stringify(params, { arrayFormat: 'brackets' });
			}
		}).then(res => {
			return res.data;
		}).catch(err => {
			return err;
		});
	}
	return {
	  get(url, options = {}) {
      return request(url, 'GET', null, options);
    },
    post(url, options = {}) {
      return request(url, 'POST', options);
    },
    put(url, options = {}) {
      return request(url, 'PUT', options);
    },
    del(url, options = {}) {
      return request(url, 'DELETE', options);
    },
    patch(url, options = {}) {
      return request(url, 'PATCH', options);
    }
	}
}
