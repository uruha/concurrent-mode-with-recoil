import { UserId, Profile } from '~/type';

export const fetchProfile = (userId: UserId) => {
  return new Promise<Profile>(resolve => {
    setTimeout(() => {
      resolve({
        name: `ID: ${userId}: Ringo Starr`
      });
    }, 1000);
  });
};
