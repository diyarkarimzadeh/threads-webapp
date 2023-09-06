import { FollowCartProps } from "@/components/Search/FollowCard";

interface Thread {
  id: number;
  username: string;
  userImage: string;
  threadText: string;
  likes: number;
  replies: number;
  userWhoReplies: string;
  createdAt: string;
  isVerified: boolean;
}

export const threads: Thread[] = [
  {
    id: 1,
    username: "diyarkarimzadeh",
    userImage:
      "https://www.fakepersongenerator.com/Face/female/female20161025235219666.jpg",
    threadText: "Hello it's a beautiful day here.",
    likes: 122,
    replies: 15,
    userWhoReplies:
      "https://www.fakepersongenerator.com/Face/male/male20161086287283478.jpg",
    createdAt: "2h",
    isVerified: false,
  },
  {
    id: 2,
    username: "diyarkarimzadeh",
    userImage:
      "https://www.fakepersongenerator.com/Face/female/female20161025235219666.jpg",
    threadText:
      "Ok so I’m telling you all before I post on ~the other app~ tomorrow but I rearranged my whole desk setup so that I’m facing the window and not the wall and I kinda love it 😍",
    likes: 78,
    replies: 1,
    userWhoReplies:
      "https://www.fakepersongenerator.com/Face/male/male20161086287283478.jpg",
    createdAt: "2h",
    isVerified: false,
  },
  {
    id: 3,
    username: "diyarkarimzadeh",
    userImage:
      "https://www.fakepersongenerator.com/Face/female/female20161025235219666.jpg",
    threadText:
      "Throwback to coding in a cafe in Belgium! Can we talk about how Europe is amazing and that I should DEFINITELY move there because I’ll do it 😩",
    likes: 122,
    replies: 15,
    userWhoReplies:
      "https://www.fakepersongenerator.com/Face/male/male20161086287283478.jpg",
    createdAt: "3h",
    isVerified: false,
  },
  {
    id: 4,
    username: "diyarkarimzadeh",
    userImage:
      "https://www.fakepersongenerator.com/Face/female/female20161025235219666.jpg",
    threadText:
      "I still can't believe I worked at a company that told me they had “three years runway” when I joined. I was a part of the layoffs they did three months after that. 🙃",
    likes: 122,
    replies: 15,
    userWhoReplies:
      "https://www.fakepersongenerator.com/Face/male/male20161086287283478.jpg",
    createdAt: "3h",
    isVerified: false,
  },
  {
    id: 5,
    username: "diyarkarimzadeh",
    userImage:
      "https://www.fakepersongenerator.com/Face/female/female20161025235219666.jpg",
    threadText:
      "Btw I’ve been learning three.js for fun and just so y’all know, my personal website is about to be absolute 🔥",
    likes: 122,
    replies: 15,
    userWhoReplies:
      "https://www.fakepersongenerator.com/Face/male/male20161086287283478.jpg",
    createdAt: "3h",
    isVerified: false,
  },
];

export const mainThreads: Thread[] = [
  {
    id: 1,
    username: "selenagomez",
    userImage:
      "https://www.fakepersongenerator.com/Face/female/female20161025235219666.jpg",
    threadText: "Hey threads people, how you doing? 😍",
    likes: 8546,
    replies: 455,
    userWhoReplies:
      "https://www.fakepersongenerator.com/Face/male/male20161086287283478.jpg",
    createdAt: "45m",
    isVerified: true,
  },
  {
    id: 2,
    username: "petermckinnnon",
    userImage:
      "https://www.fakepersongenerator.com/Face/female/female1023072426972.jpg",
    threadText: "Anybody in Toronto today? we have a photoshoot!",
    likes: 980,
    replies: 134,
    userWhoReplies:
      "https://www.fakepersongenerator.com/Face/male/male20161086287283478.jpg",
    createdAt: "2h",
    isVerified: true,
  },
  {
    id: 3,
    username: "paryakhadivand",
    userImage:
      "https://www.fakepersongenerator.com/Face/female/female1022713364411.jpg",
    threadText:
      "Throwback to coding in a cafe in Belgium! Can we talk about how Europe is amazing and that I should DEFINITELY move there because I’ll do it 😩",
    likes: 122,
    replies: 15,
    userWhoReplies:
      "https://www.fakepersongenerator.com/Face/male/male20161086287283478.jpg",
    createdAt: "3h",
    isVerified: false,
  },
  {
    id: 4,
    username: "diyarkarimzadeh",
    userImage:
      "https://www.fakepersongenerator.com/Face/female/female20161025235219666.jpg",
    threadText:
      "I still can't believe I worked at a company that told me they had “three years runway” when I joined. I was a part of the layoffs they did three months after that. 🙃",
    likes: 122,
    replies: 15,
    userWhoReplies:
      "https://www.fakepersongenerator.com/Face/male/male20161086287283478.jpg",
    createdAt: "3h",
    isVerified: false,
  },
  {
    id: 5,
    username: "diyarkarimzadeh",
    userImage:
      "https://www.fakepersongenerator.com/Face/female/female20161025235219666.jpg",
    threadText:
      "Btw I’ve been learning three.js for fun and just so y’all know, my personal website is about to be absolute 🔥",
    likes: 122,
    replies: 15,
    userWhoReplies:
      "https://www.fakepersongenerator.com/Face/male/male20161086287283478.jpg",
    createdAt: "3h",
    isVerified: false,
  },
  {
    id: 6,
    username: "wesbos",
    userImage:
      "https://www.fakepersongenerator.com/Face/female/female20161025235219666.jpg",
    threadText:
      "I have very little faith the threads desktop experience will ever be good given how stunted and buggy the instagram web/desktop is.",
    likes: 59,
    replies: 11,
    userWhoReplies:
      "https://www.fakepersongenerator.com/Face/male/male20161086287283478.jpg",
    createdAt: "5d",
    isVerified: false,
  },
];

export const followerCardsData: FollowCartProps[] = [
  {
    id: 1,
    userImage:
      "https://www.fakepersongenerator.com/Face/female/female20161025235219666.jpg",
    username: "diyarkarimzadeh",
    name: "Diyar Karimzadeh",
    followerCount: "201",
  },
  {
    id: 2,
    userImage:
      "https://www.fakepersongenerator.com/Face/female/female20161025235219666.jpg",
    username: "princi.vershwal",
    name: "Princi Vershwal",
    followerCount: "585",
  },
  {
    id: 3,
    userImage:
      "https://www.fakepersongenerator.com/Face/female/female20161025235219666.jpg",
    username: "nothing",
    name: "Nothing",
    followerCount: "174K",
  },
  {
    id: 4,
    userImage:
      "https://www.fakepersongenerator.com/Face/female/female20161025235219666.jpg",
    username: "theviewabc",
    name: "The View",
    followerCount: "75.7K",
  },
];
