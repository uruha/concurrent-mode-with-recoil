import { atom, snapshot_UNSTABLE } from 'recoil';
import { UserId, UserDataApi, Profile, Posts } from '~/type';
import { userProfileAdapter, userPostsAdapter } from '~/adapter';

export const userIdStateMock = atom<UserId>({
  key: 'UserId',
  default: 'u001'
});

export const fetchUserDataMock: UserDataApi = {
  fetchProfile: () => { throw 'mock' },
  fetchPosts  : () => { throw 'mock' }
};

export const profileMock: Profile = {
  name: 'ID: u001: Ringo Starr'
};

export const postsMock: Posts = [
  { 
    id: 0,
    text:
      "I get by with a little help from my friends"
  }
];

describe('User Data adapter', () => {
  /**
   * @CAUTION
   * This test is a test when the value used in the application is equivalent to the value used in the external API,
   * and the return value of the external API and the value used in the application are often different.
   */
  describe('userProfileAdapter', () => {
    it('Check the integrity of the adapter value conversion', () => {
      fetchUserDataMock.fetchProfile = async () => profileMock;
      const userProfileState = userProfileAdapter(fetchUserDataMock, userIdStateMock);
      const initialSnapshot = snapshot_UNSTABLE();

      // defaut promise
      initialSnapshot.getPromise(userProfileState).then(resource => expect(resource).toEqual(profileMock));
    });
  });

  describe('userPostsAdapter', () => {
    it('Check the integrity of the adapter value conversion', () => {
      fetchUserDataMock.fetchPosts = async () => postsMock;
      const userPostsState = userPostsAdapter(fetchUserDataMock, userIdStateMock);
      const initialSnapshot = snapshot_UNSTABLE();

      // resolve
      expect(initialSnapshot.getPromise(userPostsState)).resolves.toEqual(postsMock);
    });
  });
});