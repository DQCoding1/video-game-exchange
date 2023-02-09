import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { allInitialGames } from "../../consts/initialGames";

const SpecificGame = () => {
  const textAreaRef = useRef();
  const messageSuccess = useRef();
  const { idSpecificGame } = useParams();
  const infoSpecifiGame = allInitialGames.find(
    (item) => item.id === idSpecificGame
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    textAreaRef.current.value === ""
      ? alert("the input is empty")
      : messageSuccess.current.classList.add(".section__success");
  };

  return (
    <section>
      <h1>{infoSpecifiGame.nameOfGame}</h1>
      <div>
        <img
          src={require(`../../assets/gamesImages/${infoSpecifiGame.nameOfGame} ${infoSpecifiGame.consoleType}.jpg`)}
          alt={`${idSpecificGame.nameOfGame} image`}
        />
        <div>Game state: {infoSpecifiGame.isNew ? "New" : "Used"}</div>
        <div>Console: {infoSpecifiGame.consoleType}</div>
        <p>{infoSpecifiGame.description}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="textArea">
          write some message to the owner to exchange the game
        </label>
        <textarea id="textArea" ref={textAreaRef}></textarea>
        <input type="submit" value="send message" />
      </form>
      <div ref={messageSuccess}>Message sent succesfully</div>
    </section>
  );
};

export default SpecificGame;
