import { useState } from "react";
import {
  allInitialGames,
  initialPlayGames,
  initialXboxGames,
} from "../../consts/initialGames";

const useInitialGames = () => {
  const [defaultGames, setDefaultGames] = useState([]);

  const allGames = (setState) => {
    setState(allInitialGames);
  };

  const playGames = (setState) => {
    setState(initialPlayGames);
  };

  const xboxGames = (setState) => {
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
