import { v4 as uuidv4 } from 'uuid';


export const allInitialGames = [
  {
    id: uuidv4(),
    userName: "user1",
    nameOfGame: "fifa 17",
    consoleType: "xbox 360",
    isNew: false,
    description: "the game works well although visually it is a bit worn"
  },
  {
    id: uuidv4(),
    userName: "user3",
    nameOfGame: "fifa 21",
    consoleType: "xbox series",
    isNew: false,
    description: "it is working well"
  },
  {
    id: uuidv4(),
    userName: "user2",
    nameOfGame: "god of war ragnarok",
    consoleType: "playStation 5",
    isNew: true,
    description: "the game is in perfect condition"
  },
  {
    id: uuidv4(),
    userName: "user1",
    nameOfGame: "need for speed",
    consoleType: "xbox one",
    isNew: true,
    description: "if you're interested send me a message"
  },
  {
    id: uuidv4(),
    userName: "user4",
    nameOfGame: "ufc 3",
    consoleType: "playStation 3",
    isNew: false,
    description: "it is working well"
  },
  {
    id: uuidv4(),
    userName: "user5",
    nameOfGame: "hitman",
    consoleType: "playStation 4",
    isNew: true,
    description: "the game is in perfect condition"
  },
  {
    id: uuidv4(),
    userName: "user6",
    nameOfGame: "devil may cry 4",
    consoleType: "xbox 360",
    isNew: true,
    description: "if you're interested send me a message"
  },
  {
    id: uuidv4(),
    userName: "user3",
    nameOfGame: "silent hill",
    consoleType: "xbox one",
    isNew: true,
    description: "the game is in perfect condition"
  },
  {
    id: uuidv4(),
    userName: "user2",
    nameOfGame: "assassins creed 3",
    consoleType: "xbox 360",
    isNew: false,
    description: "the game works well although visually it is a bit worn"
  },
  {
    id: uuidv4(),
    userName: "user4",
    nameOfGame: "resident evil 6",
    consoleType: "xbox series",
    isNew: false,
    description: "the game is used but it's working like a new one"
  },
  {
    id: uuidv4(),
    userName: "user4",
    nameOfGame: "resident evil 5",
    consoleType: "playStation 4",
    isNew: true,
    description: "if you're interested send me a message"
  },
  {
    id: uuidv4(),
    userName: "user1",
    nameOfGame: "halo collection",
    consoleType: "xbox one",
    isNew: true,
    description: "the game is in perfect condition"
  },
  {
    id: uuidv4(),
    userName: "user6",
    nameOfGame: "dragon ball xenoverse 2",
    consoleType: "playStation 4",
    isNew: true,
    description: "if you're interested send me a message"
  },
  {
    id: uuidv4(),
    userName: "user5",
    nameOfGame: "far cry 6",
    consoleType: "playStation 4",
    isNew: false,
    description: "it is working well"
  },
  {
    id: uuidv4(),
    userName: "user2",
    nameOfGame: "the evil within",
    consoleType: "xbox one",
    isNew: true,
    description: "the game is in perfect condition"
  },
  {
    id: uuidv4(),
    userName: "user1",
    nameOfGame: "the evil within 2",
    consoleType: "playStation 4",
    isNew: false,
    description: "the game is used but it's working like a new one"
  },
  {
    id: uuidv4(),
    userName: "user4",
    nameOfGame: "elden ring",
    consoleType: "playStation 5",
    isNew: false,
    description: "the game is used but it is working well"
  },
  {
    id: uuidv4(),
    userName: "user2",
    nameOfGame: "fifa 19",
    consoleType: "xbox 360",
    isNew: false,
    description: "the game works well although visually it is a bit worn"
  },
  {
    id: uuidv4(),
    userName: "user1",
    nameOfGame: "grand theft auto",
    consoleType: "playStation 5",
    isNew: true,
    description: "if you're interested send me a message"
  },
  {
    id: uuidv4(),
    userName: "user6",
    nameOfGame: "atlas fallen",
    consoleType: "xbox series",
    isNew: true,
    description: "the game is in perfect condition"
  },
  {
    id: uuidv4(),
    userName: "user5",
    nameOfGame: "fifa 17",
    consoleType: "playStation 3",
    isNew: false,
    description: "the game works well although visually it is a bit worn"
  },
  {
    id: uuidv4(),
    userName: "user1",
    nameOfGame: "halo infinite",
    consoleType: "xbox series",
    isNew: false,
    description: "if you're interested send me a message"
  },
  {
    id: uuidv4(),
    userName: "user3",
    nameOfGame: "god of war",
    consoleType: "playStation 3",
    isNew: false,
    description: "it is working well"
  },
  {
    id: uuidv4(),
    userName: "user2",
    nameOfGame: "skate 3",
    consoleType: "xbox 360",
    isNew: true,
    description: "the game is in perfect condition"
  },
  {
    id: uuidv4(),
    userName: "user2",
    nameOfGame: "god of war",
    consoleType: "playStation 4",
    isNew: true,
    description: "if you're interested send me a message"
  },
  {
    id: uuidv4(),
    userName: "user5",
    nameOfGame: "red dead redemption 2",
    consoleType: "playStation 4",
    isNew: false,
    description: "the game is used but it's working like a new one"
  },
];

export const initialPlayGames = allInitialGames.filter((item) =>
  item.consoleType.includes("playStation")
);

export const initialXboxGames = allInitialGames.filter((item) =>
  item.consoleType.includes("xbox")
);
