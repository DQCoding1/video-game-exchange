import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import GameCards from "./GameCards";
import FilterForm from "./FilterForm";
import { UserContext } from "../contexts/User";
import { PostsContext } from "../contexts/Posts";
import { PublicRoutes } from "../routes/routes";
import { consoleTypes } from "../consts/consoleTypes";
import burgerSvg from "../assets/svg/burger.svg";
import closeSvg from "../assets/svg/close.svg";
import "./MainPage.scss";

const MainPage = ({ consoleType }) => {
  const [inputText, setInputText] = useState("");
  const [defaultPosts, setDefaultPosts] = useState([]) 
  const [currentPosts, setCurrentPosts] = useState([]) 
  const userContextInfo = useContext(UserContext);
  const postsContextInfo = useContext(PostsContext)
  const navigate = useNavigate();
  const formRef = useRef();

  useEffect(() => {
    if (postsContextInfo.allPosts.length > 0){
      switch (consoleType){
        case consoleTypes.playAndXbox:
          setCurrentPosts([...postsContextInfo.allPosts])
          setDefaultPosts([...postsContextInfo.allPosts])
          break;
          case consoleTypes.playStation:
          setCurrentPosts([...postsContextInfo.playPosts])
          setDefaultPosts([...postsContextInfo.playPosts])
          break;
        case consoleTypes.xbox:
          setCurrentPosts([...postsContextInfo.xboxPosts])
          setDefaultPosts([...postsContextInfo.xboxPosts])
          break;
      }
    }
  },[postsContextInfo.allPosts])


  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputText.toLowerCase().trim();
    const nameOfGameMatches = postsContextInfo.allPosts.filter((item) =>
      item.name_of_game.toLowerCase().includes(inputValue)
    );
    setCurrentPosts(nameOfGameMatches);
    setInputText("");
  };

  const setHeaderColor = () => {
    switch (consoleType) {
      case consoleTypes.playAndXbox:
        return "section__header";
      case consoleTypes.playStation:
        return "section__header--play";
      case consoleTypes.xbox:
        return "section__header--xbox";
    }
  };

  const showFormResponsive = () => {
    formRef.current.classList.add("section__formResponsive");
  };

  const closeFormResponsive = () => {
    formRef.current.classList.remove("section__formResponsive");
  };

  const handleSession = (e) => {
    if (e.target.innerText === "Logout"){
      userContextInfo.setUserInfo({
        userName: ""
      })
    } else {
      navigate(PublicRoutes.LOGIN)
    }
  }

  return (
    <section className="section">
      <header className={setHeaderColor()}>
        <div className="section__goToLogin" onClick={handleSession}>
          {userContextInfo.userInfo.userName ? "Logout" : "Login"}
        </div>
        <h1 className="section__h1">{consoleType} games</h1>
        <img
          src={burgerSvg}
          alt="menu icon"
          className="section__burger"
          onClick={showFormResponsive}
        ></img>
      </header>
      <div className="section__welcome">
        {userContextInfo.userInfo.userName &&
          `🖐 Welcome ${userContextInfo.userInfo.userName} !`}
      </div>
      <main className="section__main">
        <div className="section__cards">
          <GameCards currentPosts={currentPosts} consoleType={consoleType} />
        </div>
        <form onSubmit={handleSubmit} className="section__form" ref={formRef}>
          <img
            src={closeSvg}
            alt="close icon"
            className="section__close"
            onClick={closeFormResponsive}
          />
          <FilterForm
            consoleType={consoleType}
            inputText={inputText}
            setInputText={setInputText}
            defaultPosts={defaultPosts}
            setDefaultPosts={setDefaultPosts}
            setCurrentPosts={setCurrentPosts}
          />
        </form>
      </main>
    </section>
  );
};

export default MainPage;