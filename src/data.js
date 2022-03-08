import { v4 as uuid } from "uuid";

export const defaultUser = {
  id: uuid(),
  username: "Jerahmeel Dalisay",
  name: "name",
  profile_image: "https://media-exp1.licdn.com/dms/image/C4D03AQENNpi0niXsuw/profile-displayphoto-shrink_200_200/0/1639436354955?e=1649894400&v=beta&t=6tewPetPoKHfKBT-AHvLn-LadWy4edOW2SQ9oOE_kEI"
};

export function getDefaultUser() {
  return {
    id: uuid(),
    username: "Jerahmeeel Dalisay",
    name: "name",
    profile_image: "https://media-exp1.licdn.com/dms/image/C4D03AQENNpi0niXsuw/profile-displayphoto-shrink_200_200/0/1639436354955?e=1649894400&v=beta&t=6tewPetPoKHfKBT-AHvLn-LadWy4edOW2SQ9oOE_kEI"
  };
}

export const defaultPost = {
  id: uuid(),
  likes: 10,
  caption: `<span class="">Everyday is a good day to learn! 🤔⚛️👇<br>•<br>•<br>👉 Get your noodle running and keep chasing your dreams!🔥</span>`,
  user: defaultUser,
  media: "https://reedbarger.nyc3.digitaloceanspaces.com/reactbootcamp/post.jpeg",
  comments: [],
  created_at: "2020-02-28T03:08:14.522421+00:00"
};

export function getDefaultPost() {
  return {
    id: uuid(),
    likes: 10,
    caption: `<span class="">Everyday is a good day to learn! 🤔⚛️👇<br>•<br>•<br>👉 Get your noodle running and keep chasing your dreams!🔥</span>`,
    user: defaultUser,
    media: "https://reedbarger.nyc3.digitaloceanspaces.com/reactbootcamp/post.jpeg",
    comments: [],
    created_at: "2020-02-28T03:08:14.522421+00:00"
  };
}

export const defaultNotifications = [
  {
    id: uuid(),
    type: "follow",
    user: defaultUser,
    created_at: "2020-02-29T03:08:14.522421+00:00"
  },
  {
    id: uuid(),
    type: "like",
    user: defaultUser,
    post: defaultPost,
    created_at: "2020-02-29T03:08:14.522421+00:00"
  }
];

export const defaultCurrentUser = {
  id: uuid(),
  username: "me",
  name: "myself",
  profile_image: "https://media-exp1.licdn.com/dms/image/C4D03AQENNpi0niXsuw/profile-displayphoto-shrink_200_200/0/1639436354955?e=1649894400&v=beta&t=6tewPetPoKHfKBT-AHvLn-LadWy4edOW2SQ9oOE_kEI",
  website: "jerahmeeldalisay.com",
  email: "me@gmail.com",
  bio: "This is my bio",
  phone_number: "555-555-5555",
  posts: Array.from({ length: 10 }, () => getDefaultPost()),
  followers: [defaultUser],
  following: [defaultUser]
};
