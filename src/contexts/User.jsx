import React, {useState, createContext} from 'react'

export const UserContext = createContext()

const UserProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({userName : ""})

  return (
    <UserContext.Provider value={{userInfo, setUserInfo}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider