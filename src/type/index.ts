import { RecoilState, RecoilValueReadOnly } from 'recoil';

/** abstracted fetcher */
export type DataFetcher<S, R> = (state: S) => R;

/** core business interface */
export type UserId = string;
export type Profile = {
  name: string;
};
export type Post = {
  id: number;
  text: string;
}
export type Posts = Post[];

/** recoil wrapped interface */
export type UserIdState = RecoilState<UserId>;
export type UserProfile = RecoilValueReadOnly<Profile>;
export type UserPosts   = RecoilValueReadOnly<Posts>;
export interface UserDataResource {
  profile: UserProfile;
  posts  : UserPosts;
}

/** specifically used DataFetcher */
export type UserDataFetcher = DataFetcher<UserIdState, UserDataResource>;
