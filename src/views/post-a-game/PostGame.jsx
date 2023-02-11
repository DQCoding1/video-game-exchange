import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allInitialGames } from "../../consts/initialGames";
import { v4 as uuidv4 } from "uuid";

const initialNewGame = {
  id: uuidv4(),
  nameOfGame: "",
  consoleType: "",
  isNew: "",
  description: "",
  image: "",
};

const PostGame = () => {
  const [newGame, setNewGame] = useState(initialNewGame);
  const imgContainerRef = useRef();
  const navigate = useNavigate();

  const uploadImage = (e) => {
    const files = e.target.files;
    const url = URL.createObjectURL(files[0]);
    const img = document.createElement("img");
    img.src = url;
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
        [e.target.name]: true
      });
    } else if (e.target.value === "gameStateUsed") {
      setNewGame({
        ...newGame,
        [e.target.name]: false
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
      allInitialGames.unshift(newGame);
      localStorage.setItem("image", newGame.image);
      navigate("/playandxbox");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="div" ref={imgContainerRef}></div>
        <label htmlFor="file">Upload image</label>
        <input
          type="file"
          id="file"
          accept="images/*"
          onChange={uploadImage}
          required
        />
        <label htmlFor="nameOfGame">Name of Game</label>
        <input
          id="nameOfGame"
          type="text"
          value={newGame.inputText}
          name="nameOfGame"
          onChange={updateGameInfo}
        />
        <label htmlFor="consoleType">Console Type</label>
        <select id="consoleType" name="consoleType" onChange={updateGameInfo}>
          <option value="">- - -</option>
          <option value="xbox 360">xbox 360</option>
          <option value="xbox one">xbox one</option>
          <option value="xbox series">xbox series</option>
          <option value="playStation 3">playStation 3</option>
          <option value="playStation 4">playStation 4</option>
          <option value="playStation 5">playStation 5</option>
        </select>
        <label htmlFor="isNew">Is new</label>
        <select name="isNew" id="isNew" onChange={updateGameInfo}>
          <option value="">- - -</option>
          <option value="gameStateNew">yes</option>
          <option value="gameStateUsed">no</option>
        </select>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={newGame.description}
          name="description"
          onChange={updateGameInfo}
        ></textarea>
        <label htmlFor="submit">Post game</label>
        <input id="submit" type="submit" value="Post" />
      </form>
    </div>
  );
};

export default PostGame;
