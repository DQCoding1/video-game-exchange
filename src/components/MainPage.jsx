import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useInitialGames from "../utils/hooks/useInitialGames";
import GameCards from "./GameCards";
import FilterForm from "./FilterForm";

const MainPage = ({ consoleType }) => {
  const { defaultGames, setDefaultGames, allGames, playGames, xboxGames } =
    useInitialGames();
  const [currentGames, setCurrentGames] = useState([]);
  const [inputText, setInputText] = useState("");

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
    }
  }, []);


  return (
    <section>
      <h1>{consoleType} games</h1>
      <div>
        <GameCards currentGames={currentGames} />
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
      </div>
      <Link to={""}>Post a game</Link>
    </section>
  );
};

export default MainPage;
