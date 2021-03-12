import { UserId, Profile, Posts } from '~/type';

export const fetchProfile = (userId: UserId) => {
  return new Promise<Profile>(resolve => {
    setTimeout(() => {
      resolve({
        name: `ID: ${userId}: Ringo Starr`
      });
    }, 1000);
  });
};

export const fetchPosts = (userId: UserId) => {
  console.log(`ID: ${userId} posts`);
  return new Promise<Posts>(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 0,
          text:
            "I get by with a little help from my friends"
        },
        {
          id: 1,
          text:
            "I'd like to be under the sea in an octupus's garden"
        },
        {
          id: 2,
          text: "You got that sand all over your feet"
        }
      ]);
    }, 2000);
  });
}