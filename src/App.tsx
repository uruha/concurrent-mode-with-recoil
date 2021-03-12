import React, { Suspense, useState } from 'react';
import { atom, selector, RecoilState, useRecoilValue, RecoilValueReadOnly } from 'recoil';

type UserId = string;
type Profile = {
  name: string
};
interface UserDataResource {
  profile: RecoilValueReadOnly<Profile>;
}

const userIdState = atom<UserId>({
  key: 'UserId',
  default: 'u001'
});

/** Promise mock */
const fetchProfile = (userId: UserId) => {
  return new Promise<Profile>(resolve => {
    setTimeout(() => {
      resolve({
        name: `ID: ${userId}: Ringo Starr`
      });
    }, 1000);
  });
};

/** like adaptor interface */
const userDataFetcher = (userIdState: RecoilState<UserId>) => {
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

const ProfileDetails: React.VFC<{ resource: UserDataResource }> = ({ resource }) => {
  const profile = useRecoilValue(resource.profile);
  return <h1>{profile.name}</h1>;
};


const initialResource = userDataFetcher(userIdState);

const Dashboard = () => {
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

const App = () => (
  <>
    <Dashboard />
  </>
);

export default App;
