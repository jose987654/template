import axios from 'axios';
import { baseUrl_1 } from './index';
import { axiosConfig_1 } from './user';
// function to get all email data
export async function getEmailList() {
  const data = await axios.get(`${baseUrl_1}/get_emails?_format=json`, axiosConfig_1).then(function (response) {
    const response_data = response;
    console.log(response_data);
    return response_data;
  });
  return data;
}

// function to update all email data
export async function updateEmail(payload) {
  const data = await axios.get(`${baseUrl_1}/update_email?_format=json`, payload, axiosConfig_1).then(function (response) {
    const response_data = response;
    console.log(response_data);
    return response_data;
  });
  return data;
}

// function to update all email data
export async function addEmailList(payload) {
  const data = await axios.post(`${baseUrl_1}/add_Email_status?_format=json`, payload, axiosConfig_1).then(function (response) {
    const response_data = response;
    console.log(response_data);
    return response_data;
  });
  return data;
}

// function to update all email data
export async function delEmailList(payload) {
  const data = await axios.post(`${baseUrl_1}/del_Email_status?_format=json`, payload, axiosConfig_1).then(function (response) {
    const response_data = response;
    console.log(response_data);
    return response_data;
  });
  return data;
}

// function to delete single email data
export async function deleteEmail(payload) {
  const data = await axios.post(`${baseUrl_1}/delete_email?_format=json`, payload, axiosConfig_1).then(function (response) {
    const response_data = response;
    console.log(response_data);
    return response_data;
  });
  return data;
}

// function to delete all email data
export async function deleteAllEmail() {
  const data = await axios.post(`${baseUrl_1}/delete_all_emails?_format=json`, axiosConfig_1).then(function (response) {
    const response_data = response;
    console.log(response_data);
    return response_data;
  });
  return data;
}
