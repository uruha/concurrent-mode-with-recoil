/**
 * @NOTE
 * This API is mock.
 */
import { UserId, Profile, Posts } from '~/type';

export const fetchProfile = (userId: UserId) => {
  const result = {
    name: `ID: ${userId}: Ringo Starr`
  };

  return new Promise<Profile>(resolve => {
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
};

export const fetchPosts = (userId: UserId) => {
  const result = [
    {
      id: 0,
      text:
        `[ID: ${userId}] I get by with a little help from my friends`
    },
    {
      id: 1,
      text:
        `[ID: ${userId}] I'd like to be under the sea in an octupus's garden`
    },
    {
      id: 2,
      text: `[ID: ${userId}] You got that sand all over your feet`
    }
  ];

  return new Promise<Posts>((resolve, reject) => {
    setTimeout(() => {
      (Math.random() < 0.5)
        ? resolve(result)
        : reject('Cannot fetch posts');
    }, 2000);
  });
}