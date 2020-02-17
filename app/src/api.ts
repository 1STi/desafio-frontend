/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios';
import B64Encoder from 'crypto-js/enc-base64';
import hmacSHA1 from 'crypto-js/hmac-sha1';
import Base64 from 'crypto-js/enc-base64';
import {ForecastCondition} from './state/common';

export type LocationApiResponse = {
  location: {
    city: string;
    region: string;
    woeid: number;
    country: string;
  };
  current_observation: {
    wind: {
      chill: number;
      speed: number;
    };
    atmosphere: {
      humidity: number;
    };
    condition: {
      text: string;
      code: number;
      temperature: number;
    };
  };
  forecasts: ForecastCondition[];
};

const url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
const appId = 'tFbzM64a';
const consumer_key =
  'dj0yJmk9UklxcWFrZTNETWFoJmQ9WVdrOWRFWmllazAyTkdFbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTJh';
const consumer_secret = '71a020bdd5074cc42bd894442346a29e7f6c1f4e';

function buildAuthorizaton(query: getOpts): string {
  const concat = '&';
  // const query = {location: 'sunnyvale,ca', format: 'json'};
  const oauth = {
    oauth_consumer_key: consumer_key,
    oauth_nonce: Math.random()
      .toString(36)
      .substring(2),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: new Date().getTime() / 1000,
    oauth_version: '1.0',
    oauth_signature: '',
  };

  const merged = {...query, ...oauth};
  // Note the sorting here is required
  const merged_arr = Object.keys(merged)
    .sort()
    .map(function(k) {
      // @ts-ignore
      return [k + '=' + encodeURIComponent(merged[k])];
    });
  const signature_base_str =
    'GET' +
    concat +
    encodeURIComponent(url) +
    concat +
    encodeURIComponent(merged_arr.join(concat));

  const composite_key = encodeURIComponent(consumer_secret) + concat;
  const hash = hmacSHA1(signature_base_str, composite_key);
  const signature = hash.toString(B64Encoder);

  oauth['oauth_signature'] = signature;
  const auth_header: string =
    'OAuth ' +
    Object.keys(oauth)
      .map(function(k) {
        // @ts-ignore
        return [k + '="' + oauth[k] + '"'];
      })
      .join(',');
  return auth_header;
}

type getOpts = {location: string} | {woeid: number};
export async function get(opts: getOpts): Promise<LocationApiResponse> {
  const config = {
    headers: {
      Authorization: buildAuthorizaton(opts),
      'X-Yahoo-App-Id': appId,
    },
    data: {...opts, u: 'c', format: 'json'},
  };
  //! handle errors!!!
  const {data} = await axios.get<LocationApiResponse>(url, config);
  if (data?.location?.woeid) {
    return data;
  } else {
    throw new Error('Localidade não encontrada');
  }
}
