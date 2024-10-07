import axios from 'axios';
import { baseUrl } from '.';
import { axiosConfig } from './user';

// function 
export async function getTwitterUserDetails(payload) {
  const data = await axios
    .get(`${baseUrl}/twitter/profile/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

// function 
export async function getTwitterUserfeed(payload) {
  const data = await axios
    .get(`${baseUrl}/twitter/profile_feed/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

// function 
export async function getTwitterUserReplies(payload) {
  const data = await axios
    .get(`${baseUrl}/twitter/profile_replies/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

// function 
export async function getTwitterUserFollowers(payload) {
  const data = await axios
    .get(`${baseUrl}/twitter/profile_followers/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

// function 
export async function getTwitterUserFollowing(payload) {
  const data = await axios
    .get(`${baseUrl}/twitter/profile_following/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

// function 
export async function getTwitterUserLikes(payload) {
  const data = await axios
    .get(`${baseUrl}/twitter/profile_likes/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

// function 
export async function getTwitterUserTweets(payload) {
  const data = await axios
    .get(`${baseUrl}/twitter/profile_tweets/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

// function 
export async function getTwitterUserHighlghts(payload) {
  const data = await axios
    .get(`${baseUrl}/twitter/profile_highlights/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

// function 
export async function getTwitterUserMedia(payload) {
  const data = await axios
    .get(`${baseUrl}/twitter/profile_media/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

// function 
export async function getTwitterUserMemberships(payload) {
  const data = await axios
    .get(`${baseUrl}/twitter/profile/lists/memberships/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
}

// function 
export async function getTwitterSearchTop(payload) {
    const data = await axios
      .get(`${baseUrl}/twitter/search/top/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }

  // function 
export async function getTwitterSearchLatest(payload) {
    const data = await axios
      .get(`${baseUrl}/twitter/search/latest/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }

  // function 
export async function getTwitterSearchPhotos(payload) {
    const data = await axios
      .get(`${baseUrl}/twitter/search/photos/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }

  // function 
export async function getTwitterSearchVideos(payload) {
    const data = await axios
      .get(`${baseUrl}/twitter/search/videos/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }

  // function 
  export async function getTwitterSearchPeople(payload, cursor) {
    let url = `${baseUrl}/twitter/search/people/${payload}`;
    if (cursor) {
        url += `?cursor=${cursor}`;
    }
    const data = await axios
      .get(url, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;

}
  
  // function 
  export async function getTwitterTweet(payload) {
    const data = await axios
      .get(`${baseUrl}/twitter/tweet/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }

    // function 
export async function getTwitterTweetReply(payload) {
    const data = await axios
      .get(`${baseUrl}/twitter/tweet/replies/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }

    // function 
export async function getTwitterTweetRetweets(payload) {
    const data = await axios
      .get(`${baseUrl}/twitter/tweet/retweets/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }

    // function 
export async function getTwitterTweetLikers(payload) {
    const data = await axios
      .get(`${baseUrl}/twitter/tweet/likers/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }

    // function 
export async function getTwitterTweetQuotes(payload) {
    const data = await axios
      .get(`${baseUrl}/twitter/tweet/quotes/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }