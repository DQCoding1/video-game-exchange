import { useState } from "react";
import { allInitialGames } from "../../consts/initialGames";

const useInitialGames = () => {
  const [defaultGames, setDefaultGames] = useState([]);

  const allGames = (setState) => {
    setState(allInitialGames);
  };

  const playGames = (setState) => {
    const initialPlayGames = allInitialGames.filter((item) =>
      item.consoleType.includes("playStation")
    );
    setState(initialPlayGames);
  };

  const xboxGames = (setState) => {
    const initialXboxGames = allInitialGames.filter((item) =>
      item.consoleType.includes("xbox")
    );
    setState(initialXboxGames);
  };

  return {
    defaultGames,
    setDefaultGames,
    allGames,
    playGames,
    xboxGames,
  };
};

export default useInitialGames;
