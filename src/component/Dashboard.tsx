import React, { Suspense, useState } from 'react';
import { atom, useRecoilValue } from 'recoil';

import { userDataFetcher } from '~/fetcher';

import { UserId, UserDataResource } from '~/type';

const userIdState = atom<UserId>({
  key: 'UserId',
  default: 'u001'
});
const initialResource = userDataFetcher(userIdState);

const ProfileDetails: React.VFC<{ resource: UserDataResource }> = ({ resource }) => {
  const profile = useRecoilValue(resource.profile);
  return <h1>{profile.name}</h1>;
};

const Dashboard: React.VFC = () => {
  const [resource, setResource] = useState(initialResource);

  const handleRefreshData = () => {
    setResource(userDataFetcher(userIdState));
  }

  return (
    <>
      <button onClick={handleRefreshData}>
        Refresh
      </button>
      <Suspense
        fallback={<p>Loading profile...</p>}
      >
        <ProfileDetails resource={resource} />
      </Suspense>
    </>
  );
};

export default Dashboard;
