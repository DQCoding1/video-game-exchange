export const allInitialGames = [
  {
    userName: "user1",
    nameOfGame: "fifa 17",
    consoleType: "xbox 360",
    isNew: false,
  },
  {
    userName: "user3",
    nameOfGame: "fifa 21",
    consoleType: "xbox series",
    isNew: false,
  },
  {
    userName: "user2",
    nameOfGame: "god of war ragnarok",
    consoleType: "playStation 5",
    isNew: true,
  },
  {
    userName: "user1",
    nameOfGame: "need for speed",
    consoleType: "xbox one",
    isNew: true,
  },
  {
    userName: "user4",
    nameOfGame: "ufc 3",
    consoleType: "playStation 3",
    isNew: false,
  },
  {
    userName: "user5",
    nameOfGame: "hitman",
    consoleType: "playStation 4",
    isNew: true,
  },
  {
    userName: "user6",
    nameOfGame: "devil may cry 4",
    consoleType: "xbox 360",
    isNew: true,
  },
  {
    userName: "user3",
    nameOfGame: "silent hill",
    consoleType: "xbox one",
    isNew: true,
  },
  {
    userName: "user2",
    nameOfGame: "assassins creed 3",
    consoleType: "xbox 360",
    isNew: false,
  },
  {
    userName: "user4",
    nameOfGame: "resident evil 6",
    consoleType: "xbox series",
    isNew: false,
  },
  {
    userName: "user4",
    nameOfGame: "resident evil 5",
    consoleType: "playStation 4",
    isNew: true,
  },
  {
    userName: "user1",
    nameOfGame: "halo collection",
    consoleType: "xbox one",
    isNew: true,
  },
  {
    userName: "user6",
    nameOfGame: "dragon ball xenoverse 2",
    consoleType: "playStation 4",
    isNew: true,
  },
  {
    userName: "user5",
    nameOfGame: "far cry 6",
    consoleType: "playStation 4",
    isNew: false,
  },
  {
    userName: "user2",
    nameOfGame: "the evil within",
    consoleType: "xbox one",
    isNew: true,
  },
  {
    userName: "user1",
    nameOfGame: "the evil within 2",
    consoleType: "playStation 5",
    isNew: false,
  },
  {
    userName: "user4",
    nameOfGame: "elden ring",
    consoleType: "playStation 5",
    isNew: false,
  },
  {
    userName: "user2",
    nameOfGame: "fifa 19",
    consoleType: "xbox 360",
    isNew: false,
  },
  {
    userName: "user1",
    nameOfGame: "grand theft auto",
    consoleType: "playStation 5",
    isNew: true,
  },
  {
    userName: "user6",
    nameOfGame: "atlas fallen",
    consoleType: "xbox series",
    isNew: true,
  },
  {
    userName: "user5",
    nameOfGame: "fifa 17",
    consoleType: "playStation 3",
    isNew: false,
  },
  {
    userName: "user1",
    nameOfGame: "halo infinite",
    consoleType: "xbox series",
    isNew: false,
  },
  {
    userName: "user3",
    nameOfGame: "god of war",
    consoleType: "playStation 3",
    isNew: false,
  },
  {
    userName: "user2",
    nameOfGame: "skate 3",
    consoleType: "xbox 360",
    isNew: true,
  },
  {
    userName: "user2",
    nameOfGame: "god of war 4",
    consoleType: "playStation 4",
    isNew: true,
  },
  {
    userName: "user5",
    nameOfGame: "red dead redemption 2",
    consoleType: "playStation 4",
    isNew: false,
  },
];

export const initialPlayGames = allInitialGames.filter((item) =>
  item.consoleType.includes("playStation")
);

export const initialXboxGames = allInitialGames.filter((item) =>
  item.consoleType.includes("xbox")
);
