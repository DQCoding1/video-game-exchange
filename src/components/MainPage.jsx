import React, { useContext, useEffect, useRef, useState } from "react";
import useInitialGames from "../utils/hooks/useInitialGames";
import GameCards from "./GameCards";
import FilterForm from "./FilterForm";
import burgerSvg from "../assets/svg/burger.svg";
import closeSvg from "../assets/svg/close.svg";
import "./MainPage.scss";
import { UserContext } from "../contexts/User";

const MainPage = ({ consoleType }) => {
  const { defaultGames, setDefaultGames, allGames, playGames, xboxGames } =
    useInitialGames();
  const [currentGames, setCurrentGames] = useState([]);
  const [inputText, setInputText] = useState("");
  const userContextInfo = useContext(UserContext)
  console.log(userContextInfo);
  
  const consolesRef = {
    refPlay3: useRef(),
    refPlay4: useRef(),
    refPlay5: useRef(),
    refXbox360: useRef(),
    refXboxSeries: useRef(),
    refXboxOne: useRef(),
  };

  const newOrUsedRef = {
    refNew: useRef(),
    refUsed: useRef(),
    refNewAndUsed: useRef(),
  };

  const formRef = useRef();

  useEffect(() => {
    switch (consoleType) {
      case "PlayStation And Xbox":
        allGames(setDefaultGames);
        allGames(setCurrentGames);
        break;
      case "PlayStation":
        playGames(setDefaultGames);
        playGames(setCurrentGames);
        break;
      case "Xbox":
        xboxGames(setDefaultGames);
        xboxGames(setCurrentGames);
        break;
      default :
        allGames(setDefaultGames);
        allGames(setCurrentGames);
    }
  }, []);

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

  return (
    <section className="section">
      <header className={setHeaderColor()}>
        <h1 className="section__h1">{consoleType} games</h1>
        <img
          src={burgerSvg}
          alt="menu icon"
          className="section__burger"
          onClick={showFormResponsive}
        ></img>
      </header>
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
            allGames={allGames}
            playGames={playGames}
            xboxGames={xboxGames}
            consolesRef={consolesRef}
            newOrUsedRef={newOrUsedRef}
          />
        </form>
      </main>
    </section>
  );
};

export default MainPage;
