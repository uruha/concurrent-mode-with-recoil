import { selector } from 'recoil';
import { UserDataAdapter } from '~/type';

export const userProfileAdapter: UserDataAdapter['profile'] = (api, userIdState) => selector({
  key: 'UserProfile',
  get: async ({ get }) => {
    const response = await api.fetchProfile(get(userIdState));
    return response;
  }
});

export const userPostsAdapter: UserDataAdapter['posts'] = (api, userIdState) => selector({
  key: 'UserPosts',
  get: async ({ get }) => {
    const response = await api.fetchPosts(get(userIdState));
    return response;
  }
});
