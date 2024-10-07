import axios from 'axios';
import { baseUrl } from '.';
import { axiosConfig } from './user';

// function to update all email data
export async function getLinkedinUserDetails(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserAbout(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/about?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserExperince(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/experience?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserEducation(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/education?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserSkills(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/skills?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserRecommendations(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/recommendations?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserRecommendationsGiven(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/recommendations/given?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserContact(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/contact-info?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserIntrests(payload,payload2) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/interests/${payload2}?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserActivity(payload,payload2) {
  // console.log('response_data API',payload2);
  // console.log(`/personal_profile/activity/${payload2}?url=${payload}`)
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/activity/${payload2}?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserAlsoViewed(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/people-also-viewed?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserEvents(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/events?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserAwards(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/honors-and-awards?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserPublications(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/publications?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserImages(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/images?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserLanguages(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/languages?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserPatents(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/patents?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserProjects(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/projects?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserVolunteering(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/volunteering?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserOrganizations(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/organizations?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserLicenses(payload) {
  const data = await axios
    .get(
      `${baseUrl}/linkedin/personal_profile/licenses-and-certifications?url=${payload}`,
      axiosConfig,
    )
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinUserTest(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/personal_profile/test-scores?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinSearchUser(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/search/people/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinSearchCompany(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/search/companies/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinSearchJobs(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/search/jobs/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinSearchPosts(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/search/posts/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinSearchLocations(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/search/locations/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinCompany(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/company?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinCompanyPeople(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/company/people?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinCompanyJobs(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/company/jobs?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
export async function getLinkedinCompanyPosts(payload) {
  const data = await axios
    .get(`${baseUrl}/linkedin/company/posts?url=${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
