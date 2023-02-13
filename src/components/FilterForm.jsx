import React from "react";
import { Link } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../routes/routes";
import { NavLink } from "react-router-dom";
import "./FilterForm.scss";

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

  return (
    <>
      <ul className="consoles">
        <li className="consoles__consoleContainer">
          <NavLink
            to={PublicRoutes.PLAYANDXBOX}
            onClick={() => backToInitialGames(allGames)}
            className={({ isActive }) =>
              isActive
                ? "consoles__playAndXboxLink--on"
                : "consoles__playAndXboxLink--off"
            }
          >
            PlayStation And Xbox
          </NavLink>
          {consoleType === "PlayStation And Xbox" && (
            <ul className="consoles__lists">
              <li
                onClick={() => filterSpecificConsole("playStation 3")}
                className="consoles__li"
              >
                <input
                  type="radio"
                  className="consoles__radio"
                  ref={consolesRef.refPlay3}
                  name="allConsoles"
                  id="playStation 3"
                />
                <label htmlFor="playStation 3" className="consoles__label">
                  playStation 3
                </label>
              </li>
              <li
                onClick={() => filterSpecificConsole("playStation 4")}
                className="consoles__li"
              >
                <input
                  type="radio"
                  className="consoles__radio"
                  ref={consolesRef.refPlay4}
                  name="allConsoles"
                  id="playStation 4"
                />
                <label htmlFor="playStation 4" className="consoles__label">
                  playStation 4
                </label>
              </li>
              <li
                onClick={() => filterSpecificConsole("playStation 5")}
                className="consoles__li"
              >
                <input
                  type="radio"
                  className="consoles__radio"
                  ref={consolesRef.refPlay5}
                  name="allConsoles"
                  id="playStation 5"
                />
                <label htmlFor="playStation 5" className="consoles__label">
                  playStation 5
                </label>
              </li>
              <li
                onClick={() => filterSpecificConsole("xbox 360")}
                className="consoles__li"
              >
                <input
                  type="radio"
                  className="consoles__radio"
                  ref={consolesRef.refXbox360}
                  name="allConsoles"
                  id="xbox 360"
                />
                <label htmlFor="xbox 360" className="consoles__label">
                  xbox 360
                </label>
              </li>
              <li
                onClick={() => filterSpecificConsole("xbox one")}
                className="consoles__li"
              >
                <input
                  type="radio"
                  className="consoles__radio"
                  ref={consolesRef.refXboxOne}
                  name="allConsoles"
                  id="xbox one"
                />
                <label htmlFor="xbox one" className="consoles__label">
                  xbox one
                </label>
              </li>
              <li
                onClick={() => filterSpecificConsole("xbox series")}
                className="consoles__li"
              >
                <input
                  type="radio"
                  className="consoles__radio"
                  ref={consolesRef.refXboxSeries}
                  name="allConsoles"
                  id="xbox series"
                />
                <label htmlFor="xbox series" className="consoles__label">
                  xbox series
                </label>
              </li>
            </ul>
          )}
        </li>
        <li className="consoles__consoleContainer">
          <NavLink
            to={PublicRoutes.PLAYSTATION}
            onClick={() => backToInitialGames(playGames)}
            className={({ isActive }) =>
              isActive ? "consoles__playLink--on" : "consoles__playLink--off"
            }
          >
            PlayStation
          </NavLink>
          {consoleType === "PlayStation" && (
            <ul className="consoles__lists">
              <li
                onClick={() => filterSpecificConsole("playStation 3")}
                className="consoles__li"
              >
                <input
                  type="radio"
                  className="consoles__radio"
                  ref={consolesRef.refPlay3}
                  name="allConsoles"
                  id="playStation 3"
                />
                <label htmlFor="playStation 3" className="consoles__label">
                  playStation 3
                </label>
              </li>
              <li
                onClick={() => filterSpecificConsole("playStation 4")}
                className="consoles__li"
              >
                <input
                  type="radio"
                  className="consoles__radio"
                  ref={consolesRef.refPlay4}
                  name="allConsoles"
                  id="playStation 4"
                />
                <label htmlFor="playStation 4" className="consoles__label">
                  playStation 4
                </label>
              </li>
              <li
                onClick={() => filterSpecificConsole("playStation 5")}
                className="consoles__li"
              >
                <input
                  type="radio"
                  className="consoles__radio"
                  ref={consolesRef.refPlay5}
                  name="allConsoles"
                  id="playStation 5"
                />
                <label htmlFor="playStation 5" className="consoles__label">
                  playStation 5
                </label>
              </li>
            </ul>
          )}
        </li>
        <li className="consoles__consoleContainer">
          <NavLink
            to={PublicRoutes.XBOX}
            onClick={() => backToInitialGames(xboxGames)}
            className={({ isActive }) =>
              isActive ? "consoles__xboxLink--on" : "consoles__xboxLink--off"
            }
          >
            Xbox
          </NavLink>
          {consoleType === "Xbox" && (
            <ul className="consoles__lists">
              <li
                onClick={() => filterSpecificConsole("xbox 360")}
                className="consoles__li"
              >
                <input
                  type="radio"
                  className="consoles__radio"
                  ref={consolesRef.refXbox360}
                  name="allConsoles"
                  id="xbox 360"
                />
                <label htmlFor="xbox 360" className="consoles__radio">
                  xbox 360
                </label>
              </li>
              <li
                onClick={() => filterSpecificConsole("xbox one")}
                className="consoles__li"
              >
                <input
                  type="radio"
                  className="consoles__radio"
                  ref={consolesRef.refXboxOne}
                  name="allConsoles"
                  id="xbox one"
                />
                <label htmlFor="xbox one" className="consoles__label">
                  xbox one
                </label>
              </li>
              <li
                onClick={() => filterSpecificConsole("xbox series")}
                className="consoles__li"
              >
                <input
                  type="radio"
                  className="consoles__radio"
                  ref={consolesRef.refXboxSeries}
                  name="allConsoles"
                  id="xbox series"
                />
                <label htmlFor="xbox series" className="consoles__label">
                  xbox series
                </label>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <ul className="newOrUsedContainer">
        <li onClick={filterNewGames} className="newOrUsedContainer__li">
          <input
            type="radio"
            className="newOrUsedContainer__radio"
            name="newOrUsed"
            id="newGame"
            ref={newOrUsedRef.refNew}
          />
          <label htmlFor="newGame" className="newOrUsedContainer__label">
            New games
          </label>
        </li>
        <li onClick={filterUsedGames} className="newOrUsedContainer__li">
          <input
            type="radio"
            className="newOrUsedContainer__radio"
            name="newOrUsed"
            id="usedGame"
            ref={newOrUsedRef.refUsed}
          />
          <label htmlFor="usedGame" className="newOrUsedContainer__label">
            Used Games
          </label>
        </li>
        <li onClick={filterNewAndUsedGames} className="newOrUsedContainer__li">
          <input
            type="radio"
            className="newOrUsedContainer__radio"
            name="newOrUsed"
            id="newAndUsed"
            ref={newOrUsedRef.refNewAndUsed}
            defaultChecked
          />
          <label htmlFor="newAndUsed" className="newOrUsedContainer__label">
            New and Used Games
          </label>
        </li>
      </ul>
      <ul className="search">
        <li className="search__labelContainer">
          <label htmlFor="inputFindGame" className="search__label">
            Find Some Game
          </label>
        </li>
        <li className="search__inputContainer">
          <input
            type="text"
            className="search__input"
            id="inputFindGame"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </li>
        <li className="search__submitContainer">
          <input type="submit" value="Search" className="search__submit" />
        </li>
      </ul>
      <Link to={PrivateRoutes.POSTGAME} className="linkToPost">
        Post a game
      </Link>
    </>
  );
};

export default FilterForm;
