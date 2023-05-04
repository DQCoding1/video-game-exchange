import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/User';
import { PostsContext } from '../../contexts/Posts';
import { PublicRoutes } from '../../routes/routes';
import { consoleTypes } from '../../consts/consoleTypes';
import Loading from '../../components/Loading';
import "./Dashboard.scss";


const Dashboard = () => {
  const userContextInfo = useContext(UserContext)
  const postsContextInfo = useContext(PostsContext)
  const [yourPosts, setYourPosts] = useState([])

  useEffect(() => {
    if (postsContextInfo.allPosts.length > 0){
      const yourPosts = postsContextInfo.allPosts.filter(item => {
        return item.user_id === userContextInfo.userInfo.userId
      })
      setYourPosts(yourPosts)
    }
  },[postsContextInfo.allPosts])


  const setButtonColor = (consoleType) => {
    if (consoleType.includes(consoleTypes.playStation)){
      return "article__linkPlay"
    } else {
      return "article__linkXbox"
    }
  };

  return (
    <section className='dashboard'>
      <div className='dashboard__yourPostsContainer'>
        <h1 className='dashboard__yourPosts'>
          These are your posts, {userContextInfo.userInfo.userName}
        </h1>
      </div>
      <div className='dashboard__cards'>
      {yourPosts.map((item) => (
        <article key={item.post_id} className="dashboard__article article">
          <img 
            src={"data:image/jpg;base64,"+item.image} 
            alt={item.name_of_game}
            className="article__img"
            loading="lazy"
          />
          <div className="article__texts">
            <h2 className="article__h2">{item?.name_of_game}</h2>
            {item.is_new === "true" ? (
              <div className="article__newGame">New</div>
            ) : (
              <div className="article__usedGame">Used</div>
            )}
            <div className="article__consoleType">{item?.console_type}</div>
            <NavLink 
              to={`${PublicRoutes.SPECIFICGAME}/${item.post_id}`}
              className={() => setButtonColor(item.console_type)}
            >
              See more
            </NavLink> 
          </div>
        </article>
      ))}
      </div>
      {!postsContextInfo.allPosts.length > 0 &&
        <Loading />
      }
    </section>
  )
}

export default Dashboard