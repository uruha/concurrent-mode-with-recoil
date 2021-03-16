import { RecoilState, RecoilValueReadOnly } from 'recoil';

/** abstracted type */
export type ExternalApi<I, O> = undefined extends I
  ? (input?: I) => Promise<O>
  : (input: I) => Promise<O>;

export type Adapter<A, S, V> = undefined extends S
  ? (externalApi: A, state?: S) => V
  : (externalApi: A, state: S) => V;

export type DataFetcher<A, S, T> = undefined extends S
  ? (externalApi: A, state?: S) => { [K in keyof T]: T[K] extends Adapter<A, S, infer V> ? V : never }
  : (externalApi: A, state: S) => { [K in keyof T]: T[K] extends Adapter<A, S, infer V> ? V : never };

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

/**
 * recoil wrapped interface
 * (the value you want to use in your recoil)
 */
export type UserIdState      = RecoilState<UserId>;
export type UserProfileState = RecoilValueReadOnly<Profile>;
export type UserPostsState   = RecoilValueReadOnly<Posts>;

/** specifically used abstracted interface */
export interface UserDataApi {
  fetchProfile: ExternalApi<UserId, Profile>;
  fetchPosts  : ExternalApi<UserId, Posts>;
}
export interface UserDataAdapter {
  profile: Adapter<UserDataApi, UserIdState, UserProfileState>;
  posts  : Adapter<UserDataApi, UserIdState, UserPostsState>;
}

export type UserDataFetcher = DataFetcher<UserDataApi, UserIdState, UserDataAdapter>;