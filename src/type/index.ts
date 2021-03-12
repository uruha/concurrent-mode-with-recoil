import { RecoilState, RecoilValueReadOnly } from 'recoil';

/** abstracted interface */
export type DataFetcher<S, A, R> = (state: S, externalApi: A) => R;
export type ExternalApi<I, O> = (input: I) => Promise<O>;

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
export type UserIdState      = RecoilState<UserId>;
export type UserProfileState = RecoilValueReadOnly<Profile>;
export type UserPostsState   = RecoilValueReadOnly<Posts>;
export interface UserDataResource {
  profile: UserProfileState;
  posts  : UserPostsState;
}

/** specifically used abstracted interface */
export interface UserDataApi {
  fetchProfile: ExternalApi<UserId, Profile>;
  fetchPosts  : ExternalApi<UserId, Posts>;
} 
export type UserDataFetcher = DataFetcher<UserIdState, UserDataApi, UserDataResource>;
