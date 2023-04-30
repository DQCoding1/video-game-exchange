import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInitialGames from "../utils/hooks/useInitialGames";
import GameCards from "./GameCards";
import FilterForm from "./FilterForm";
import burgerSvg from "../assets/svg/burger.svg";
import closeSvg from "../assets/svg/close.svg";
import "./MainPage.scss";
import { UserContext } from "../contexts/User";
import { PublicRoutes } from "../routes/routes";

const MainPage = ({ consoleType }) => {
  const { allPosts, defaultGames, currentGames, setCurrentGames} =
    useInitialGames(consoleType);
  const [inputText, setInputText] = useState("");
  const userContextInfo = useContext(UserContext);
  const navigate = useNavigate();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputText.toLowerCase().trim();
    const nameOfGameMatches = defaultGames.filter((item) =>
      item.nameOfGame.toLowerCase().includes(inputValue)
    );
    setCurrentGames(nameOfGameMatches);
    setInputText("");
  };

  const setHeaderColor = () => {
    switch (consoleType) {
      case "PlayStation And Xbox":
        return "section__header";
      case "PlayStation":
        return "section__header--play";
      case "Xbox":
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
          <GameCards currentGames={currentGames} consoleType={consoleType} />
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
            setCurrentGames={setCurrentGames}
            defaultGames={defaultGames}
            allPosts={allPosts}
          />
        </form>
      </main>
    </section>
  );
};

export default MainPage;
