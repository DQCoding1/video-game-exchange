import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { allInitialGames } from "../../consts/initialGames";
import { v4 as uuidv4 } from "uuid";
import "./PostGame.scss";
import { PublicRoutes } from "../../routes/routes";

const initialNewGame = {
  id: uuidv4(),
  userName: localStorage.getItem("userStorage"),
  nameOfGame: "",
  consoleType: "",
  isNew: "",
  description: "",
  image: "",
};

const PostGame = () => {
  const [newGame, setNewGame] = useState(initialNewGame);
  const imgContainerRef = useRef();
  const inputFileRef = useRef();
  const messageSuccess = useRef();
  const navigate = useNavigate();

  const uploadImage = (e) => {
    const files = e.target.files;
    const url = URL.createObjectURL(files[0]);
    const img = document.createElement("img");
    img.classList.add("postGame__img");
    img.src = url;
    if (imgContainerRef.current.children.length > 0) {
      imgContainerRef.current.removeChild(imgContainerRef.current.children[0]);
    }
    imgContainerRef.current.appendChild(img);
    setNewGame({
      ...newGame,
      image: url,
    });
  };

  const updateGameInfo = (e) => {
    if (e.target.value === "gameStateNew") {
      setNewGame({
        ...newGame,
        [e.target.name]: true,
      });
    } else if (e.target.value === "gameStateUsed") {
      setNewGame({
        ...newGame,
        [e.target.name]: false,
      });
    } else {
      setNewGame({
        ...newGame,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newGame.nameOfGame.trim() === "" ||
      newGame.consoleType === "" ||
      newGame.description.trim() === "" ||
      newGame.isNew === "" ||
      newGame.image.trim() === ""
    ) {
      alert("inputs can't be empty");
    } else {
      messageSuccess.current.classList.add("postGame__success--visible");
      allInitialGames.unshift(newGame);
      localStorage.setItem("image", newGame.image);
      messageSuccess.current.classList.add("specificGame__success--visible");
      setTimeout(() => {
        return (
          messageSuccess.current.classList.remove("postGame__success--visible"),
          navigate(`${PublicRoutes.PLAYANDXBOX}`)
        );
      }, 3000);
    }
  };

  const handleClickImgContainer = () => {
    inputFileRef.current.click();
  };
  return (
    <section className="postGame">
      <Link to={PublicRoutes.PLAYANDXBOX} className="postGame__backToMain">
        BACK TO MAIN
      </Link>
      <h1 className="postGame__h1">Post a new Game</h1>
      <form onSubmit={handleSubmit} className="postGame__form">
        <div
          className="postGame__imgContainer"
          ref={imgContainerRef}
          onClick={handleClickImgContainer}
        ></div>
        <label htmlFor="file" className="postGame__labelFile">
          Upload image
        </label>
        <input
          type="file"
          id="file"
          accept="images/*"
          onChange={uploadImage}
          required
          ref={inputFileRef}
          className="postGame__file"
        />
        <label htmlFor="nameOfGame" className="postGame__labelInputText">
          Name of Game
        </label>
        <input
          id="nameOfGame"
          type="text"
          value={newGame.inputText}
          name="nameOfGame"
          onChange={updateGameInfo}
          className="postGame__inputText"
        />
        <label htmlFor="consoleType" className="postGame__labelConsoleType">
          Console Type
        </label>
        <select
          id="consoleType"
          name="consoleType"
          onChange={updateGameInfo}
          className="postGame__consoleType"
        >
          <option value="" className="postGame__consoleType">
            - - -
          </option>
          <option value="xbox 360" className="postGame__consoleType">
            xbox 360
          </option>
          <option value="xbox one" className="postGame__consoleType">
            xbox one
          </option>
          <option value="xbox series" className="postGame__consoleType">
            xbox series
          </option>
          <option value="playStation 3" className="postGame__consoleType">
            playStation 3
          </option>
          <option value="playStation 4" className="postGame__consoleType">
            playStation 4
          </option>
          <option value="playStation 5" className="postGame__consoleType">
            playStation 5
          </option>
        </select>
        <label htmlFor="isNew" className="postGame__labelGameState">
          Is it new ?
        </label>
        <select
          name="isNew"
          id="isNew"
          onChange={updateGameInfo}
          className="postGame__gameState"
        >
          <option value="" className="postGame__gameState">
            - - -
          </option>
          <option value="gameStateNew" className="postGame__gameState">
            yes
          </option>
          <option value="gameStateUsed" className="postGame__gameState">
            no
          </option>
        </select>
        <label htmlFor="description" className="postGame__labelDescription">
          Description
        </label>
        <textarea
          id="description"
          value={newGame.description}
          name="description"
          onChange={updateGameInfo}
          placeholder="write a description"
          className="postGame__description"
        ></textarea>
        <label htmlFor="submit" className="postGame__labelSubmit">
          Post game
        </label>
        <input
          id="submit"
          type="submit"
          value="Post"
          className="postGame__submit"
        />
      </form>
      <div className="postGame__success" ref={messageSuccess}>
        Game Posted successfully
      </div>
    </section>
  );
};

export default PostGame;
