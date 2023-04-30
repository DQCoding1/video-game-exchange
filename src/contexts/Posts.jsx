import React, { createContext, useState } from 'react'

export const PostsContext = createContext()

const PostsProvider = ({children}) => {
  const [postsStateContext, setPostsStateContext] = useState([])

  return(
    <PostsContext.Provider value={{postsStateContext, setPostsStateContext}}>
      {children}
    </PostsContext.Provider>
  )
}
 

export default PostsProvider