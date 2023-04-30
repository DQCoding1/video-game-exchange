import { useState, useEffect, useContext } from "react";
import { PostsContext } from "../../contexts/Posts";

const useInitialGames = (consoleType) => {
  const [allPosts, setAllPosts] = useState([])
  const [defaultGames, setDefaultGames] = useState([]);
  const [currentGames, setCurrentGames] = useState([]);
  const PostsInfoContext = useContext(PostsContext)

  useEffect(() => {
    fetch("https://videogame-exchange.000webhostapp.com/api-php/index.php")
    .then(res => res.json())
    .then(data => {
      setAllPosts(data)
      PostsInfoContext.setPostsStateContext(data)

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
