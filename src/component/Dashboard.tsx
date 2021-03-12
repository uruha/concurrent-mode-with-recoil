import React, { Suspense, useState, unstable_useTransition } from 'react';
import { atom, useRecoilValue } from 'recoil';

import * as api from '~/api';
import { userDataFetcher } from '~/fetcher';
import { UserId, UserDataResource } from '~/type';

type UserDataProps = {
  resource: UserDataResource;
}

const userIdState = atom<UserId>({
  key: 'UserId',
  default: 'u001'
});
const initialResource = userDataFetcher(userIdState, api);

const ProfileDetails: React.VFC<UserDataProps> = ({ resource }) => {
  const profile = useRecoilValue(resource.profile);
  return <h1>{profile.name}</h1>;
};

const PostLists: React.VFC<UserDataProps> = ({ resource }) => {
  const posts = useRecoilValue(resource.posts);
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
};

const Dashboard: React.VFC = () => {
  const [resource, setResource] = useState(initialResource);
  const [startTransition, isPending] = unstable_useTransition({
    busyDelayMs: 3000
  });

  const handleRefreshData = () => {
    startTransition(() => {
      setResource(userDataFetcher(userIdState, api));
    });
  }

  return (
    <>
      <button
        disabled={isPending}
        onClick={handleRefreshData}
      >
        {isPending ? "Loading..." : "Refresh"}
      </button>
      <Suspense
        fallback={<p>Loading profile...</p>}
      >
        <ProfileDetails resource={resource} />
        <Suspense fallback={<p>Loading posts...</p>}>
          <PostLists resource={resource} />
        </Suspense>
      </Suspense>
    </>
  );
};

export default Dashboard;
