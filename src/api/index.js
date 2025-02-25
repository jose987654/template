import {
  loginFunction,
  signupFunction,
  resetPasswordFunction,
  logoutFunction,
  logoutFunctioncustom,
  statusFunction,
  // userID
} from './user';
import {
  getLinkedinSearchUser,
  getLinkedinUserRecommendationsGiven,
  getLinkedinSearchCompany,
  getLinkedinSearchJobs,
  getLinkedinSearchPosts,
  getLinkedinSearchLocations,
  getLinkedinCompany,
  getLinkedinCompanyPeople,
  getLinkedinCompanyJobs,
  getLinkedinCompanyPosts,
  getLinkedinUserDetails,
  getLinkedinUserAbout,
  getLinkedinUserExperince,
  getLinkedinUserEducation,
  getLinkedinUserSkills,
  getLinkedinUserRecommendations,
  getLinkedinUserContact,
  getLinkedinUserIntrests,
  getLinkedinUserActivity,
  getLinkedinUserAlsoViewed,
  getLinkedinUserEvents,
  getLinkedinUserAwards,
  getLinkedinUserPublications,
  getLinkedinUserImages,
  getLinkedinUserLanguages,
  getLinkedinUserPatents,
  getLinkedinUserProjects,
  getLinkedinUserVolunteering,
  getLinkedinUserOrganizations,
  getLinkedinUserLicenses,
  getLinkedinUserTest,
} from './linkedin';
import {
  fetchKeywords,
  fetchTasks,
  removeKeyword,
  postKeyword,
  removeAutomationTask,
  postAutomationTask,
} from './automatedTasks';
import {
  getTwitterUserDetails,
  getTwitterUserfeed,
  getTwitterUserReplies,
  getTwitterUserFollowers,
  getTwitterUserFollowing,
  getTwitterUserLikes,
  getTwitterUserTweets,
  getTwitterUserHighlghts,
  getTwitterUserMedia,
  getTwitterUserMemberships,
  getTwitterSearchTop,
  getTwitterSearchLatest,
  getTwitterSearchPhotos,
  getTwitterSearchVideos,
  getTwitterSearchPeople,
  getTwitterTweet,
  getTwitterTweetReply,
  getTwitterTweetRetweets,
  getTwitterTweetLikers,
  getTwitterTweetQuotes,
} from './twitter';
import {
  getInstagramUserInfo,
  getInstagramUserName,
  getInstagramUserFollowers,
  getInstagramUserFollowing,
  getInstagramUserFeed,
  getInstagramUserReels,
  getInstagramUserTag,
  getInstagramUserStory,
  getInstagramUserHighlights,
  getInstagramUserHighlightsMedia,
  getInstagramHashtagSearch,
  getInstagramLocationSearch,
  getInstagramSearchTop,
  getInstagramSearchPlaces,
  getInstagramSearchAccounts,
  getInstagramMediaInfo,
  getInstagramPostComments,
  getInstagramPostLikes,
  getInstagramPostChildComments,
  getInstagramLocationStory,
  getInstagramLocationMap,
  getInstagramLocationFeed,
  getInstagramHashtagInfo,
  getInstagramHashtagFeed,
} from './instagram';
import {
  getFacebookGroup,
  getFacebookGroupMembers,
  getFacebookGroupHistory,
  getFacebookGroupInfo,
  getFacebookGroupAdmin,
  getFacebookGroupFeed,
  getFacebookGroupAlbums,
  getFacebookGroupPhotos,
  getFacebookPagesDetails,
  getFacebookPagesAbout,
  getFacebookPagesExtraData,
  getFacebookPagesContentData,
  getFacebookPagesTransparency,
  getFacebookPagesCommunityInfo,
  getFacebookPagesCommunityPosts,
  getFacebookPagesFeed,
  getFacebookPagesAlbums,
  getFacebookMarketplaceSearch,
  getFacebookMarketplaceSearchCategory,
  getFacebookMarketplaceProduct,
  getFacebookMarketplaceProfile,
  getFacebookAlbums,
  getFacebookAlbumsMetadata,
  getFacebookPostsNode,
  getFacebookPostsReactions,
  getFacebookPostsFalseInformation,
  getFacebookPostsComments,
  getFacebookPostsReactors,
  getFacebookPostsShares,
  getFacebookPostsMedia,
  getFacebookSearchAll,
  getFacebookSearchPosts,
  getFacebookSearchPhotos,
  getFacebookSearchVideos,
  getFacebookSearchGroups,
  getFacebookSearchPages,
  getFacebookSearchUsers,
  getFacebookSearchHashtag,
  getFacebookSearchFilters,
  getFacebookProfileTimeline,
  getFacebookProfileAbout,
  getFacebookProfileAboutTab,
  getFacebookProfileFeed,
  getFacebookProfileFriends,
  getFacebookProfileSearchposts,
  getFacebookProfileFollowers,
  getFacebookProfileFollowing,
  getFacebookProfileCheckins,
  getFacebookProfileLikes,
  getFacebookProfileAlbums,
  getFacebookProfileVideos,
  getFacebookProfileUploadedMedia,
  getFacebookProfileTaggedMedia,
} from './facebook';
import {
  getEmailList,
  updateEmail,
  deleteEmail,
  deleteAllEmail,
  addEmailList,
  delEmailList,
} from './email';
// import { loginFunction, signupFunction, resetPasswordFunction, logoutFunction, logoutFunctioncustom, statusFunction } from './user';
import { getAdCampaigns, getKeywords } from './Ads_data';
import { getConsoleData } from './console_data';
import {
  getkeywordSocialsLinkedin,
  getkeywordSocialsMeta,
  getkeywordSocialsInstaTop,
  getkeywordSocialsInsta,
  getkeywordSocialsTwitter,
} from './socials';

// const ipAddress = '23.88.55.176:5080';
// const ipAddress_1 = '23.88.55.176:5000';
const ipAddress = '127.0.0.1:5080';
const ipAddress_1 = '192.168.43.221:5000';

const baseUrl = `http://${ipAddress}`;
const baseUrl_1 = `http://${ipAddress_1}`;
// const baseUrl = `https://jon.seedr.dev:5000`;
// backend address 23.88.55.176:5000 127.0.0.1:5000

export {
  baseUrl,
  ipAddress,
  baseUrl_1,
  ipAddress_1,
  // userID,
  getKeywords,
  getEmailList,
  updateEmail,
  getkeywordSocialsLinkedin,
  getkeywordSocialsMeta,
  getkeywordSocialsInstaTop,
  getkeywordSocialsInsta,
  getkeywordSocialsTwitter,
  deleteEmail,
  deleteAllEmail,
  getAdCampaigns,
  getConsoleData,
  addEmailList,
  delEmailList,
  getFacebookGroup,
  getFacebookGroupMembers,
  getFacebookGroupHistory,
  getFacebookGroupInfo,
  getFacebookGroupAdmin,
  getFacebookGroupFeed,
  getFacebookGroupAlbums,
  getFacebookGroupPhotos,
  getFacebookPagesDetails,
  getFacebookPagesAbout,
  getFacebookPagesExtraData,
  getFacebookPagesContentData,
  getFacebookPagesTransparency,
  getFacebookPagesCommunityInfo,
  getFacebookPagesCommunityPosts,
  getFacebookPagesFeed,
  getFacebookPagesAlbums,
  getFacebookMarketplaceSearch,
  getFacebookMarketplaceSearchCategory,
  getFacebookMarketplaceProduct,
  getFacebookMarketplaceProfile,
  getFacebookAlbums,
  getFacebookAlbumsMetadata,
  fetchKeywords,
  fetchTasks,
  removeKeyword,
  postKeyword,
  removeAutomationTask,
  getFacebookPostsNode,
  getFacebookPostsReactions,
  getFacebookPostsFalseInformation,
  getFacebookPostsComments,
  getFacebookPostsReactors,
  getFacebookPostsShares,
  getFacebookPostsMedia,
  getFacebookSearchAll,
  getFacebookSearchPosts,
  getFacebookSearchPhotos,
  getFacebookSearchVideos,
  getFacebookSearchGroups,
  getFacebookSearchPages,
  getFacebookSearchUsers,
  getFacebookSearchHashtag,
  getFacebookSearchFilters,
  getFacebookProfileTimeline,
  getFacebookProfileAbout,
  getFacebookProfileAboutTab,
  getFacebookProfileFeed,
  getFacebookProfileFriends,
  getFacebookProfileSearchposts,
  getFacebookProfileFollowers,
  getFacebookProfileFollowing,
  getFacebookProfileCheckins,
  getFacebookProfileLikes,
  getFacebookProfileAlbums,
  getFacebookProfileVideos,
  getFacebookProfileUploadedMedia,
  getFacebookProfileTaggedMedia,
  getInstagramUserInfo,
  getInstagramUserName,
  getInstagramUserFollowers,
  getInstagramUserFollowing,
  getInstagramUserFeed,
  getInstagramUserReels,
  getInstagramUserTag,
  getInstagramUserStory,
  getInstagramUserHighlights,
  getInstagramUserHighlightsMedia,
  getInstagramHashtagSearch,
  getInstagramLocationSearch,
  getInstagramSearchTop,
  getInstagramSearchPlaces,
  getInstagramSearchAccounts,
  getInstagramMediaInfo,
  getInstagramPostComments,
  getInstagramPostLikes,
  getInstagramPostChildComments,
  getInstagramLocationStory,
  getInstagramLocationMap,
  getInstagramLocationFeed,
  getInstagramHashtagInfo,
  getInstagramHashtagFeed,
  getTwitterUserDetails,
  getTwitterUserfeed,
  getTwitterUserReplies,
  getTwitterUserFollowers,
  getTwitterUserFollowing,
  getTwitterUserLikes,
  getTwitterUserTweets,
  getTwitterUserHighlghts,
  getTwitterUserMedia,
  getTwitterUserMemberships,
  getTwitterSearchTop,
  getTwitterSearchLatest,
  getTwitterSearchPhotos,
  getTwitterSearchVideos,
  getTwitterSearchPeople,
  getTwitterTweet,
  getTwitterTweetReply,
  getTwitterTweetRetweets,
  getTwitterTweetLikers,
  getTwitterTweetQuotes,
  postAutomationTask,
  loginFunction,
  getLinkedinUserDetails,
  signupFunction,
  resetPasswordFunction,
  logoutFunction,
  statusFunction,
  logoutFunctioncustom,
  getLinkedinUserAbout,
  getLinkedinUserExperince,
  getLinkedinUserEducation,
  getLinkedinUserSkills,
  getLinkedinUserRecommendations,
  getLinkedinUserContact,
  getLinkedinUserIntrests,
  getLinkedinUserActivity,
  getLinkedinUserAlsoViewed,
  getLinkedinUserEvents,
  getLinkedinUserAwards,
  getLinkedinUserPublications,
  getLinkedinUserImages,
  getLinkedinUserLanguages,
  getLinkedinUserPatents,
  getLinkedinUserProjects,
  getLinkedinUserVolunteering,
  getLinkedinUserOrganizations,
  getLinkedinUserLicenses,
  getLinkedinUserTest,
  getLinkedinSearchUser,
  getLinkedinSearchCompany,
  getLinkedinSearchJobs,
  getLinkedinSearchPosts,
  getLinkedinSearchLocations,
  getLinkedinCompany,
  getLinkedinCompanyPeople,
  getLinkedinCompanyJobs,
  getLinkedinUserRecommendationsGiven,
  getLinkedinCompanyPosts,
};
