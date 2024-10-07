import axios from 'axios';
import { baseUrl_1 } from './index';
import { axiosConfig_1 } from './user';
// function to get all campaign data
export async function getConsoleData() {
  const data = await axios.get(`${baseUrl_1}/search_data?_format=json`, axiosConfig_1).then(function (response) {
    const response_data = response;
    console.log(response_data);
    return response_data;
  });
  return data;
}
