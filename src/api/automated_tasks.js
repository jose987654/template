import axios from 'axios';
import { baseUrl } from '.';
import { axiosConfig } from './user';
import { toast } from 'react-toastify';
// function to add task
export async function postAutomationTask(Payload) {
  try {
    const response = await axios.post(`${baseUrl}/add_task`, Payload, axiosConfig);
    console.log('SUCCESSFUL RESPONSE', response);
    toast.success(' Succesful.', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });
    // setTimeout(function () {
    //   window.location.href = '/auth/login';
    // }, 1300);
  } catch (err) {
    console.log('ERROR RESPONSE', err);
    toast.error(' Failed.', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
    return err;
  }
}

export async function removeAutomationTask(Payload) {
  try {
    const response = await axios.post(`${baseUrl}/remove_task`, Payload, axiosConfig);
    console.log('SUCCESSFUL RESPONSE', response);
    toast.success(' Succesful.', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });
    // setTimeout(function () {
    //   window.location.href = '/auth/login';
    // }, 1300);
  } catch (err) {
    console.log('ERROR RESPONSE', err);
    toast.error(' Failed.', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
    return err;
  }
}

export async function postKeyword(Payload) {
  try {
    const response = await axios.post(`${baseUrl}/new_keyword`, Payload, axiosConfig);
    console.log('SUCCESSFUL RESPONSE', response);
    toast.success(' Succesful.', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });
    // setTimeout(function () {
    //   window.location.href = '/auth/login';
    // }, 1300);
  } catch (err) {
    console.log('ERROR RESPONSE', err);
    toast.error(' Failed.', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
    return err;
  }
}

export async function removeKeyword(Payload) {
  try {
    const response = await axios.post(`${baseUrl}/remove_keyword`, Payload, axiosConfig);
    console.log('SUCCESSFUL RESPONSE deleted', response);
    toast.success(' Succesful.', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });
    // setTimeout(function () {
    //   window.location.href = '/auth/login';
    // }, 1300);
  } catch (err) {
    console.log('ERROR RESPONSE', err);
    toast.error(' Failed.', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
    return err;
  }
}

export async function fetchTasks(Payload) {
  try {
    const response = await axios.get(`${baseUrl}/fetch_tasks/${Payload}`, axiosConfig);
    console.log('SUCCESSFUL RESPONSE', response);
    // toast.success(' Succesful.', {
    //   position: toast.POSITION.TOP_RIGHT,
    //   autoClose: 1500,
    // });
    // setTimeout(function () {
    //   window.location.href = '/auth/login';
    // }, 1300);
    return response;
  } catch (err) {
    console.log('ERROR RESPONSE', err);
    // toast.error(' Failed.', {
    //   position: toast.POSITION.TOP_RIGHT,
    //   autoClose: 3000,
    // });
    return err;
  }
}
export async function fetchKeywords(Payload) {
  try {
    console.log('Payload sent', Payload);
    const response = await axios.get(`${baseUrl}/fetch_keywords/${Payload}`, axiosConfig);
    console.log('SUCCESSFUL RESPONSE', response);
    // toast.success(' Succesful.', {
    //   position: toast.POSITION.TOP_RIGHT,
    //   autoClose: 1500,
    // });
    // setTimeout(function () {
    //   window.location.href = '/auth/login';
    // }, 1300);
    return response;
  } catch (err) {
    console.log('ERROR RESPONSE', err);
    // toast.error(' Failed.', {
    //   position: toast.POSITION.TOP_RIGHT,
    //   autoClose: 3000,
    // });
    return err;
  }
}
