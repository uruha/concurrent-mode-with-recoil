import { RecoilState, RecoilValueReadOnly } from 'recoil';

/** abstracted fetcher */
export type DataFetcher<S, R> = (state: S) => R;

export type UserId = string;
export type Profile = {
  name: string
};

export type UserIdState = RecoilState<UserId>;
export type UserProfile = RecoilValueReadOnly<Profile>;
export interface UserDataResource {
  profile: UserProfile;
}

/** specifically used fetcher */
export type UserDataFetcher = DataFetcher<UserIdState, UserDataResource>;
