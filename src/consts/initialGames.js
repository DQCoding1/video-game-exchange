import { v4 as uuidv4 } from 'uuid';

export const allInitialGames = [
  {
    id: 1,
    userName: "user1",
    nameOfGame: "fifa 17",
    consoleType: "xbox 360",
    isNew: false,
    description: "the game works well although visually it is a bit worn",
    image: require("../assets/gamesImages/fifa 17 xbox 360.jpg")
  },
  {
    id: 2,
    userName: "user3",
    nameOfGame: "fifa 21",
    consoleType: "xbox series",
    isNew: false,
    description: "it is working well",
    image: require("../assets/gamesImages/fifa 21 xbox series.jpg")
  },
  {
    id: 3,
    userName: "user2",
    nameOfGame: "god of war ragnarok",
    consoleType: "playStation 5",
    isNew: true,
    description: "the game is in perfect condition",
    image: require("../assets/gamesImages/god of war ragnarok playStation 5.jpg")
  },
  {
    id: 4,
    userName: "user1",
    nameOfGame: "need for speed",
    consoleType: "xbox one",
    isNew: true,
    description: "if you're interested send me a message",
    image: require("../assets/gamesImages/need for speed xbox one.jpg")
  },
  {
    id: 5,
    userName: "user4",
    nameOfGame: "ufc 3",
    consoleType: "playStation 3",
    isNew: false,
    description: "it is working well",
    image: require("../assets/gamesImages/ufc 3 playStation 3.jpg")
  },
  {
    id: 6,
    userName: "user5",
    nameOfGame: "hitman",
    consoleType: "playStation 4",
    isNew: true,
    description: "the game is in perfect condition",
    image: require("../assets/gamesImages/hitman playStation 4.jpg")
  },
  {
    id: 7,
    userName: "user6",
    nameOfGame: "devil may cry 4",
    consoleType: "xbox 360",
    isNew: true,
    description: "if you're interested send me a message",
    image: require("../assets/gamesImages/devil may cry 4 xbox 360.jpg")
  },
  {
    id: 8,
    userName: "user3",
    nameOfGame: "silent hill",
    consoleType: "xbox one",
    isNew: true,
    description: "the game is in perfect condition",
    image: require("../assets/gamesImages/silent hill xbox one.jpg")
  },
  {
    id: 9,
    userName: "user2",
    nameOfGame: "assassins creed 3",
    consoleType: "xbox 360",
    isNew: false,
    description: "the game works well although visually it is a bit worn",
    image: require("../assets/gamesImages/assassins creed 3 xbox 360.jpg")
  },
  {
    id: 10,
    userName: "user4",
    nameOfGame: "resident evil 6",
    consoleType: "xbox series",
    isNew: false,
    description: "the game is used but it's working like a new one",
    image: require("../assets/gamesImages/resident evil 6 xbox series.jpg")
  },
  {
    id: 11,
    userName: "user4",
    nameOfGame: "resident evil 5",
    consoleType: "playStation 4",
    isNew: true,
    description: "if you're interested send me a message",
    image: require("../assets/gamesImages/resident evil 5 playStation 4.jpg")
  },
  {
    id: 12,
    userName: "user1",
    nameOfGame: "halo collection",
    consoleType: "xbox one",
    isNew: true,
    description: "the game is in perfect condition",
    image: require("../assets/gamesImages/halo collection xbox one.jpg")
  },
  {
    id: 13,
    userName: "user6",
    nameOfGame: "dragon ball xenoverse 2",
    consoleType: "playStation 4",
    isNew: true,
    description: "if you're interested send me a message",
    image: require("../assets/gamesImages/dragon ball xenoverse 2 playStation 4.jpg")
  },
  {
    id: 14,
    userName: "user5",
    nameOfGame: "far cry 6",
    consoleType: "playStation 4",
    isNew: false,
    description: "it is working well",
    image: require("../assets/gamesImages/far cry 6 playStation 4.jpg")
  },
  {
    id: 15,
    userName: "user2",
    nameOfGame: "the evil within",
    consoleType: "xbox one",
    isNew: true,
    description: "the game is in perfect condition",
    image: require("../assets/gamesImages/the evil within xbox one.jpg")
  },
  {
    id: 16,
    userName: "user1",
    nameOfGame: "the evil within 2",
    consoleType: "playStation 4",
    isNew: false,
    description: "the game is used but it's working like a new one",
    image: require("../assets/gamesImages/the evil within 2 playStation 4.jpg")
  },
  {
    id: 17,
    userName: "user4",
    nameOfGame: "elden ring",
    consoleType: "playStation 5",
    isNew: false,
    description: "the game is used but it is working well",
    image: require("../assets/gamesImages/elden ring playStation 5.jpg")
  },
  {
    id: 18,
    userName: "user2",
    nameOfGame: "fifa 19",
    consoleType: "xbox 360",
    isNew: false,
    description: "the game works well although visually it is a bit worn",
    image: require("../assets/gamesImages/fifa 19 xbox 360.jpg")
  },
  {
    id: 19,
    userName: "user1",
    nameOfGame: "grand theft auto",
    consoleType: "playStation 5",
    isNew: true,
    description: "if you're interested send me a message",
    image: require("../assets/gamesImages/grand theft auto playStation 5.jpg")
  },
  {
    id: 20,
    userName: "user6",
    nameOfGame: "atlas fallen",
    consoleType: "xbox series",
    isNew: true,
    description: "the game is in perfect condition",
    image: require("../assets/gamesImages/atlas fallen xbox series.jpg")
  },
  {
    id: 21,
    userName: "user5",
    nameOfGame: "fifa 17",
    consoleType: "playStation 3",
    isNew: false,
    description: "the game works well although visually it is a bit worn",
    image: require("../assets/gamesImages/fifa 17 playStation 3.jpg")
  },
  {
    id: 22,
    userName: "user1",
    nameOfGame: "halo infinite",
    consoleType: "xbox series",
    isNew: false,
    description: "if you're interested send me a message",
    image: require("../assets/gamesImages/halo infinite xbox series.jpg")
  },
  {
    id: 23,
    userName: "user3",
    nameOfGame: "god of war",
    consoleType: "playStation 3",
    isNew: false,
    description: "it is working well",
    image: require("../assets/gamesImages/god of war playStation 3.jpg")
  },
  {
    id: 24,
    userName: "user2",
    nameOfGame: "skate 3",
    consoleType: "xbox 360",
    isNew: true,
    description: "the game is in perfect condition",
    image: require("../assets/gamesImages/skate 3 xbox 360.jpg")
  },
  {
    id: 25,
    userName: "user2",
    nameOfGame: "god of war",
    consoleType: "playStation 4",
    isNew: true,
    description: "if you're interested send me a message",
    image: require("../assets/gamesImages/god of war playStation 4.jpg")
  },
  {
    id: 26,
    userName: "user5",
    nameOfGame: "red dead redemption 2",
    consoleType: "playStation 4",
    isNew: false,
    description: "the game is used but it's working like a new one",
    image: require("../assets/gamesImages/red dead redemption 2 playStation 4.jpg")
  },
];
