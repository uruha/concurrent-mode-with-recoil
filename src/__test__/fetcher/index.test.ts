import { userPostsAdapter, userProfileAdapter } from '~/adapter';
import { userDataFetcher } from '~/fetcher';
import * as mock from '~/__test__/adapter/index.test';

describe('User Data Fetcher', () => {
  it('Checking the integrity of resources for use within an application via an adapter', () => {
    mock.fetchUserDataMock.fetchProfile = async () => mock.profileMock;
    mock.fetchUserDataMock.fetchPosts   = async () => mock.postsMock;

    const resources = {
      profile: userProfileAdapter(mock.fetchUserDataMock, mock.userIdStateMock),
      posts: userPostsAdapter(mock.fetchUserDataMock, mock.userIdStateMock)
    };

    expect(userDataFetcher(mock.fetchUserDataMock, mock.userIdStateMock)).toEqual(resources);
  });
});