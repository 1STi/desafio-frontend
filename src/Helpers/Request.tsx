import { GET_ALL } from "../api";

async function Request(param: string) {
  try{
    const { url, headers } = GET_ALL(param);
    const response = await fetch(url, { headers });
    const json = await response.json();
    return json;
  } catch(err){
    console.log(err)
    return err;
  }
}

export default Request;
