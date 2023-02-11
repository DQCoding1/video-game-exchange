import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { allInitialGames } from "../../consts/initialGames";
import "./SpecificGame.scss";

const SpecificGame = () => {
  const textAreaRef = useRef();
  const messageSuccess = useRef();
  const navigate = useNavigate();
  const { idSpecificGame } = useParams();
  const infoSpecifiGame = allInitialGames.find(
    (item) => item.id === idSpecificGame
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textAreaRef.current.value.trim();
    if (value === "") {
      alert("the input can't be empty");
    } else {
      messageSuccess.current.classList.add("specificGame__success--visible");
      setTimeout(() => {
        return (
          messageSuccess.current.classList.remove(
            "specificGame__success--visible"
          ),
          navigate("/playandxbox")
        );
      }, 3000);
    }
  };

  return (
    <section className="specificGame">
      <h1 className="specificGame__h1">{infoSpecifiGame?.nameOfGame}</h1>
      <div className="specificGame__game">
        <img
          src={
            infoSpecifiGame && infoSpecifiGame.image
          }
          alt={`${idSpecificGame?.nameOfGame}`}
          className="specificGame__img"
        />
        <div className="specificGame__texts">
          <div className="specificGame__user">{infoSpecifiGame?.userName}</div>
          <div className="specificGame__gameState">
            {infoSpecifiGame?.isNew ? "New game" : "Used game"}
          </div>
          <div className="specificGame__console">
            {infoSpecifiGame?.consoleType}
          </div>
          <p className="specificGame__description">
            {infoSpecifiGame?.description}
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="specificGame__form">
        <label htmlFor="textArea" className="specificGame__label">
          write some message to exchange the game
        </label>
        <textarea
          id="textArea"
          placeholder="Write a message"
          ref={textAreaRef}
          className="specificGame__textArea"
        ></textarea>
        <input
          type="submit"
          value="send message"
          className="specificGame__submit"
        />
      </form>
      <div ref={messageSuccess} className="specificGame__success">
        Message sent successfully
      </div>
    </section>
  );
};

export default SpecificGame;
