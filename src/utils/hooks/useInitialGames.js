import { useState, useEffect } from "react";

const useInitialGames = (consoleType) => {
  const [allPosts, setAllPosts] = useState([])
  const [defaultGames, setDefaultGames] = useState([]);
  const [currentGames, setCurrentGames] = useState([]);


  useEffect(() => {
    fetch("https://videogame-exchange.000webhostapp.com/api-php/index.php")
    .then(res => res.json())
    .then(data => {
      switch (consoleType) {
        case "PlayStation And Xbox":
          setDefaultGames(data);
          setCurrentGames(data);
          break;
        case "PlayStation":
          const initialPlayGames = data.filter((item) =>
            item.console_type.includes("playStation")
          );
          setDefaultGames(initialPlayGames)
          setCurrentGames(initialPlayGames)
          break;
        case "Xbox":
          const initialXboxGames = data.filter((item) =>
            item.console_type.includes("xbox")
          );
          setDefaultGames(initialXboxGames)
          setCurrentGames(initialXboxGames)
          break;
        default:
          setAllPosts(data)
        }
      })
  },[])

  

  return {
    allPosts,
    defaultGames,
    currentGames,
    setCurrentGames,
  };
};

export default useInitialGames;
