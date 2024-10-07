import axios from 'axios';
import { baseUrl } from '.';
import { axiosConfig } from './user';

export async function getFacebookGroup(payload) {
  const data = await axios
    .get(`${baseUrl}/facebook/groups/${payload}`, axiosConfig)
    .then(function (response) {
      const response_data = response;
      console.log('response_data API', response_data);
      return response_data;
    });
  return data;
 }
export async function getFacebookGroupMembers(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/groups/members/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookGroupHistory(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/groups/history/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookGroupInfo(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/groups/info/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookGroupAdmin(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/groups/admins/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookGroupFeed(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/groups/feed/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookGroupAlbums(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/groups/albums/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookGroupPhotos(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/groups/photos/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookPagesDetails(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/pages/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookPagesAbout(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/pages/about/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookPagesExtraData(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/pages/extra-data/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookPagesContentData(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/pages/content-data/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookPagesTransparency(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/pages/transparency/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookPagesCommunityInfo(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/pages/community-info/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookPagesCommunityPosts(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/pages/community-posts/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookPagesFeed(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/pages/feed/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookPagesAlbums(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/pages/albums/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookMarketplaceSearch(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/marketplace/search/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookMarketplaceSearchCategory(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/marketplace/search/category/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookMarketplaceProduct(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/marketplace/product/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookMarketplaceProfile(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/marketplace/profile/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookAlbums(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/albums/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  } 
  export async function getFacebookAlbumsMetadata(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/albums/${payload}/metadata`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  } 
  export async function getFacebookPostsNode(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/posts/node/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  } 
  export async function getFacebookPostsReactions(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/posts/reactions-counts/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookPostsFalseInformation(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/postsfalse-information/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookPostsComments(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/posts/${payload}/comments`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookPostsReactors(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/posts/${payload}/reactors`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookPostsShares(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/posts/${payload}/shares`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookPostsMedia(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/posts/media/${payload}/reactions`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookSearchAll(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/search-all/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookSearchPosts(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/search-posts/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookSearchPhotos(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/search-photos/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookSearchVideos(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/search-videos/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookSearchGroups(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/search-groups/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookSearchPages(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/search-pages/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookSearchUsers(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/search-users/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookSearchHashtag(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/search-hashtag/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookSearchFilters(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/search-filters/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookProfileTimeline(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/profile-timeline/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookProfileAbout(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/profile-about/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookProfileAboutTab(payload,payload2) {
    const data = await axios
      .get(`${baseUrl}/facebook/profile/${payload}/about-tabs/${payload2}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookProfileFeed(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/profile-feed/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookProfileFriends(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/profile-friends/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookProfileSearchposts(payload,payload2) {
    const data = await axios
      .get(`${baseUrl}/facebook/profile/${payload}/search-posts/${payload2}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookProfileFollowers(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/profile-followers/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookProfileFollowing(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/profile-following/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookProfileCheckins(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/profile-checkins/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookProfileLikes(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/profile-likes/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookProfileAlbums(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/profile-albums/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookProfileVideos(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/profile-videos/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookProfileUploadedMedia(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/profile-uploaded-media/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }
  export async function getFacebookProfileTaggedMedia(payload) {
    const data = await axios
      .get(`${baseUrl}/facebook/profile-tagged-media/${payload}`, axiosConfig)
      .then(function (response) {
        const response_data = response;
        console.log('response_data API', response_data);
        return response_data;
      });
    return data;
  }