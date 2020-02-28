/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios';
import B64Encoder from 'crypto-js/enc-base64';
import hmacSHA1 from 'crypto-js/hmac-sha1';
import {ForecastCondition} from './state/common';
import OAuth from 'oauth-1.0a';

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

function hash_function_sha1(base_string: string, key: string): string {
  return hmacSHA1(base_string, key).toString(B64Encoder);
}

function buildRequestHeaders(
  url: string,
  method: string,
  data: any,
): OAuth.Header {
  const oauth = new OAuth({
    consumer: {key: consumer_key, secret: consumer_secret},
    signature_method: 'HMAC-SHA1',
    hash_function: hash_function_sha1,
  });
  const request_data = {
    url,
    method,
    data,
  };
  return oauth.toHeader(oauth.authorize(request_data));
}

type getOpts = {location: string} | {woeid: number};
export async function get(opts: getOpts): Promise<LocationApiResponse> {
  const params = {...opts, u: 'c', format: 'json'};
  console.log({params});
  const config = {
    headers: {
      ...buildRequestHeaders(url, 'GET', params),
      'X-Yahoo-App-Id': appId,
    },
    params,
  };
  //! handle errors!!!
  const {data} = await axios.get<LocationApiResponse>(url, config);
  if (data?.location?.woeid) {
    return data;
  } else {
    throw new Error('Localidade não encontrada');
  }
}
