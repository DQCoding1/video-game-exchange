import React from "react";
import { routes } from "../routes/routes";
import { NavLink } from "react-router-dom";

const FilterForm = ({
  consoleType,
  inputText,
  setInputText,
  setCurrentGames,
  defaultGames,
  allGames,
  playGames,
  xboxGames,
  consolesRef,
  newOrUsedRef,
}) => {
  const filterNewGames = () => {
    let guideVariable = true;
    const referencesArr = Object.values(consolesRef);
    for (let i = 0; i < referencesArr.length; i++) {
      let itemReference = referencesArr[i];
      if (itemReference?.current?.checked) {
        const newGames = defaultGames.filter(
          (item) =>
            item.isNew && item.consoleType.includes(itemReference.current.id)
        );
        setCurrentGames(newGames);
        guideVariable = false;
        break;
      }
    }
    if (guideVariable) {
      const newGames = defaultGames.filter((item) => item.isNew);
      setCurrentGames(newGames);
    }
  };

  const filterUsedGames = () => {
    let guideVariable = true;
    const referencesArr = Object.values(consolesRef);
    for (let i = 0; i < referencesArr.length; i++) {
      let itemReference = referencesArr[i];
      if (itemReference?.current?.checked) {
        const usedGames = defaultGames.filter(
          (item) =>
            !item.isNew && item.consoleType.includes(itemReference.current.id)
        );
        setCurrentGames(usedGames);
        guideVariable = false;
        break;
      }
    }
    if (guideVariable) {
      const usedGames = defaultGames.filter((item) => !item.isNew);
      setCurrentGames(usedGames);
    }
  };

  const filterNewAndUsedGames = () => {
    let guideVariable = true;
    const referencesArr = Object.values(consolesRef);
    for (let i = 0; i < referencesArr.length; i++) {
      let itemReference = referencesArr[i];
      if (itemReference?.current?.checked) {
        const newAndUsedGames = defaultGames.filter((item) =>
          item.consoleType.includes(itemReference.current.id)
        );
        setCurrentGames(newAndUsedGames);
        guideVariable = false;
        break;
      }
    }
    guideVariable && setCurrentGames(defaultGames);
  };

  const filterSpecificConsole = (specificConsole) => {
    const referencesArr = Object.values(newOrUsedRef);
    for (let i = 0; i < referencesArr.length; i++) {
      let itemReference = referencesArr[i];
      if (itemReference?.current?.checked) {
        if (itemReference.current.id === "newAndUsed") {
          const newState = defaultGames.filter((item) =>
            item.consoleType.includes(specificConsole)
          );
          setCurrentGames(newState);
          break;
        } else {
          const isNew = itemReference.current.id === "newGame" ? true : false;
          const newState = defaultGames.filter(
            (item) =>
              item.consoleType.includes(specificConsole) && item.isNew === isNew
          );
          setCurrentGames(newState);
          break;
        }
      }
    }
  };

  const backToInitialGames = (updateState) => {
    updateState(setCurrentGames);
    const referencesArr = Object.values(consolesRef);
    for (let i = 0; i < referencesArr.length; i++) {
      let itemReference = referencesArr[i];
      if (itemReference?.current?.checked) {
        itemReference.current.checked = false;
        break;
      }
    }
    newOrUsedRef.refNewAndUsed.current.checked = true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputText.toLowerCase().trim();
    const nameOfGameMatches = defaultGames.filter((item) =>
      item.nameOfGame.toLowerCase().includes(inputValue)
    );
    setCurrentGames(nameOfGameMatches);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <input
            type="text"
            id="inputFindGame"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="inputFindGame">Find Some Game</label>
        </li>
        <li>
          <input type="submit" value="Search" />
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to={routes.PLAYANDXBOX}
            onClick={() => backToInitialGames(allGames)}
          >
            PlayStation And Xbox
          </NavLink>
          {consoleType === "PlayStation And Xbox" && (
            <ul>
              <li onClick={() => filterSpecificConsole("playStation 3")}>
                <input
                  type="radio"
                  ref={consolesRef.refPlay3}
                  name="allConsoles"
                  id="playStation 3"
                />
                <label htmlFor="playStation 3">playStation 3</label>
              </li>
              <li onClick={() => filterSpecificConsole("playStation 4")}>
                <input
                  type="radio"
                  ref={consolesRef.refPlay4}
                  name="allConsoles"
                  id="playStation 4"
                />
                <label htmlFor="playStation 4">playStation 4</label>
              </li>
              <li onClick={() => filterSpecificConsole("playStation 5")}>
                <input
                  type="radio"
                  ref={consolesRef.refPlay5}
                  name="allConsoles"
                  id="playStation 5"
                />
                <label htmlFor="playStation 5">playStation 5</label>
              </li>
              <li onClick={() => filterSpecificConsole("xbox 360")}>
                <input
                  type="radio"
                  ref={consolesRef.refXbox360}
                  name="allConsoles"
                  id="xbox 360"
                />
                <label htmlFor="xbox 360">xbox 360</label>
              </li>
              <li onClick={() => filterSpecificConsole("playStation xbox one")}>
                <input
                  type="radio"
                  ref={consolesRef.refXboxOne}
                  name="allConsoles"
                  id="xbox one"
                />
                <label htmlFor="xbox one">xbox one</label>
              </li>
              <li onClick={() => filterSpecificConsole("xbox series")}>
                <input
                  type="radio"
                  ref={consolesRef.refXboxSeries}
                  name="allConsoles"
                  id="xbox series"
                />
                <label htmlFor="xbox series">xbox series</label>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            to={routes.PLAYSTATION}
            onClick={() => backToInitialGames(playGames)}
          >
            PlayStation
          </NavLink>
          {consoleType === "PlayStation" && (
            <ul>
              <li onClick={() => filterSpecificConsole("playStation 3")}>
                <input
                  type="radio"
                  ref={consolesRef.refPlay3}
                  name="allConsoles"
                  id="playStation 3"
                />
                <label htmlFor="playStation 3">playStation 3</label>
              </li>
              <li onClick={() => filterSpecificConsole("playStation 4")}>
                <input
                  type="radio"
                  ref={consolesRef.refPlay4}
                  name="allConsoles"
                  id="playStation 4"
                />
                <label htmlFor="playStation 4">playStation 4</label>
              </li>
              <li onClick={() => filterSpecificConsole("playStation 5")}>
                <input
                  type="radio"
                  ref={consolesRef.refPlay5}
                  name="allConsoles"
                  id="playStation 5"
                />
                <label htmlFor="playStation 5">playStation 5</label>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            to={routes.XBOX}
            onClick={() => backToInitialGames(xboxGames)}
          >
            Xbox
          </NavLink>
          {consoleType === "Xbox" && (
            <ul>
              <li onClick={() => filterSpecificConsole("xbox 360")}>
                <input
                  type="radio"
                  ref={consolesRef.refXbox360}
                  name="allConsoles"
                  id="xbox 360"
                />
                <label htmlFor="xbox 360">xbox 360</label>
              </li>
              <li onClick={() => filterSpecificConsole("playStation xbox one")}>
                <input
                  type="radio"
                  ref={consolesRef.refXboxOne}
                  name="allConsoles"
                  id="xbox one"
                />
                <label htmlFor="xbox one">xbox one</label>
              </li>
              <li onClick={() => filterSpecificConsole("xbox series")}>
                <input
                  type="radio"
                  ref={consolesRef.refXboxSeries}
                  name="allConsoles"
                  id="xbox series"
                />
                <label htmlFor="xbox series">xbox series</label>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <ul>
        <li onClick={filterNewGames}>
          <input
            type="radio"
            name="newOrUsed"
            id="newGame"
            ref={newOrUsedRef.refNew}
          />
          <label htmlFor="newGame">New games</label>
        </li>
        <li onClick={filterUsedGames}>
          <input
            type="radio"
            name="newOrUsed"
            id="usedGame"
            ref={newOrUsedRef.refUsed}
          />
          <label htmlFor="usedGame">Used Games</label>
        </li>
        <li onClick={filterNewAndUsedGames}>
          <input
            type="radio"
            name="newOrUsed"
            id="newAndUsed"
            ref={newOrUsedRef.refNewAndUsed}
            defaultChecked
          />
          <label htmlFor="newAndUsed">New and Used Games</label>
        </li>
      </ul>
    </form>
  );
};

export default FilterForm;
