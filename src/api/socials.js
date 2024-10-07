import axios from 'axios';
import { baseUrl } from '.';
import { axiosConfig } from './user';

// function to update all email data
export async function getkeywordSocialsTwitter(payload) {
  const data = await axios
    .get(`${baseUrl}/socials/twitter/latest/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

// function to update all email data
export async function getkeywordSocialsInsta(payload) {
  const data = await axios
    .get(`${baseUrl}/socials/instagram/latest_hashtag/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

// function to update all email data
export async function getkeywordSocialsInstaTop(payload) {
  const data = await axios
    .get(`${baseUrl}/socials/instagram/latest_top/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

// function to update all email data
export async function getkeywordSocialsMeta(payload) {
  const data = await axios
    .get(`${baseUrl}/socials/facebook/latest_hashtag/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

// function to update all email data
export async function getkeywordSocialsLinkedin(payload) {
  const data = await axios
    .get(`${baseUrl}/socials/linkedin/latest/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}