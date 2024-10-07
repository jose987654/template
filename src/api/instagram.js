import axios from 'axios';
import { baseUrl } from '.';
import { axiosConfig } from './user';

// function to update all email data
export async function getInstagramUserInfo(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/user-info/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

// function to update all email data
export async function getInstagramUserName(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/username-info/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramUserFollowers(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/user-followers/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramUserFollowing(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/user-following/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramUserFeed(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/user-feed/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramUserReels(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/user-reels/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramUserTag(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/user-tags-feed/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramUserStory(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/user-story/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramUserHighlights(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/user-highlights/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramUserHighlightsMedia(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/user-highlights-media/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
// search functions

export async function getInstagramHashtagSearch(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/hashtag-search/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramLocationSearch(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/location-search/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramSearchTop(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/search-top/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramSearchPlaces(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/search-places/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramSearchAccounts(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/search-accounts/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramMediaInfo(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/media-info/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramPostComments(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/post-comments/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramPostLikes(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/post-likes/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramPostChildComments(payload, payload_2) {
  const data = await axios
    .get(`${baseUrl}/instagram/media-info/${payload}/child-comments/${payload_2}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramLocationStory(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/location-story/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramLocationMap(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/location-map/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramLocationFeed(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/location-feed/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramHashtagInfo(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/hashtag-info/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

export async function getInstagramHashtagFeed(payload) {
  const data = await axios
    .get(`${baseUrl}/instagram/hashtag-feed/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}
