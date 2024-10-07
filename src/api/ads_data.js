import axios from 'axios';
import { baseUrl_1 } from './index';
import { axiosConfig_1 } from './user';
// function to get all campaign data
export async function getAdCampaigns() {
  const data = await axios.get(`${baseUrl_1}/ad_data?_format=json`, axiosConfig_1).then(function (response) {
    const response_data = response;
    console.log(response_data);
    return response_data;
  });
  return data;
};

export async function getKeywords(Payload) {
  try {
    const response = await axios.post(`${baseUrl_1}/generate_keywords`, Payload);
    console.log('SUCCESSFUL RESPONSE', response);
    return response;
  } catch (err) {
    console.log('ERROR RESPONSE', err);
    return err;
  }
}