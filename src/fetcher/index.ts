import { selector } from 'recoil';
import { fetchProfile } from '~/api';
import { UserDataFetcher } from '~/type';

export const userDataFetcher: UserDataFetcher = (userIdState) => {
  const userProfileState = selector({
    key: 'UserProfile',
    get: async ({ get }) => {
      const response = await fetchProfile(get(userIdState));
      return response;
    }
  });

  return {
    profile: userProfileState
  };
};