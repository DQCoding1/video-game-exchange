import React, { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [playPosts, setPlayPosts] = useState([]);
  const [xboxPosts, setXboxPosts] = useState([]);

  console.log(allPosts);

  useEffect(() => {
    fetch("https://videogame-exchange.000webhostapp.com/api-php/index.php")
    .then((res) => res.json())
    .then((data) => { 
      const reversedData = [...data];
      reversedData.reverse();
      setAllPosts(reversedData);
      })
    .catch(err => console.log(err))
    
  }, []);

  useEffect(() => {
    if (allPosts.length > 0) {
      setPlayPosts(filterPostsByPlayConsole());
      setXboxPosts(filterPostsByXboxConsole());
    }
  }, [allPosts]);


  function filterPostsByPlayConsole(){
    const playPosts = allPosts.filter((item) =>
      item.console_type.includes("playStation")
    );
    return playPosts;
  };

  function filterPostsByXboxConsole(){
    const xboxPosts = allPosts.filter((item) =>
      item.console_type.includes("xbox")
    );
    return xboxPosts;
  };


  const dataContext = {
    allPosts,
    playPosts,
    xboxPosts,
    setAllPosts,
    setPlayPosts,
    setXboxPosts,
  };

  return (
    <PostsContext.Provider value={dataContext}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
