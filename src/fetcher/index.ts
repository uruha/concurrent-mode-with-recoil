import { selector } from 'recoil';
import { UserDataFetcher } from '~/type';

export const userDataFetcher: UserDataFetcher = (userIdState, api) => {
  const userProfileState = selector({
    key: 'UserProfile',
    get: async ({ get }) => {
      const response = await api.fetchProfile(get(userIdState));
      return response;
    }
  });

  const userPostsState = selector({
    key: 'UserPosts',
    get: async ({ get }) => {
      const response = await api.fetchPosts(get(userIdState));
      return response;
    }
  });

  return {
    profile: userProfileState,
    posts: userPostsState
  };
};