import OAuth from 'oauth-1.0a';
import crypto from 'crypto';

const appId = "xBwW7pqh";
const clientId = "dj0yJmk9OU5neWhhT005YTgzJmQ9WVdrOWVFSjNWemR3Y1dnbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWE3";
const clientSec = "0937738f4020aa5cfae7337c76f7ea5d32957109";
const apiUrl = "https://weather-ydn-yql.media.yahoo.com/forecastrss";

const oauth = OAuth({
  consumer: {
    key: clientId,
    secret: clientSec
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto
      .createHmac('sha1', key)
      .update(base_string)
      .digest('base64')
  }
});


export function GET_ALL(searchUrl) {
  return {
    url: apiUrl + "?location=" + searchUrl + '&format=json&u=c',
    headers: {
      ...oauth.toHeader(oauth.authorize({
        url: apiUrl + "?location=" + searchUrl + '&format=json&u=c',
        method: 'GET'
      })),
      'X-Yahoo-App-Id': appId,
    }
  }
}