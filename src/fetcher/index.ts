import { userProfileAdapter, userPostsAdapter } from '~/adapter';
import { UserDataFetcher } from '~/type';

export const userDataFetcher: UserDataFetcher = (api, userIdState) => {
  return {
    profile: userProfileAdapter(api, userIdState),
    posts: userPostsAdapter(api, userIdState)
  };
};
