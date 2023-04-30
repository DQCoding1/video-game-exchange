import React, { useRef, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PublicRoutes } from "../../routes/routes";
import "./SpecificGame.scss";
import { PostsContext } from "../../contexts/Posts";
import { useState } from "react";

const SpecificGame = () => {
  const textAreaRef = useRef();
  const messageSuccess = useRef();
  const navigate = useNavigate();
  const { idSpecificGame } = useParams();
  const postsInfoContext = useContext(PostsContext)
  const [infoSpecificGame, setInfoSpecificGame] = useState(postsInfoContext.postsStateContext.find(
    (item) => item.post_id === idSpecificGame
  ))

  useEffect(() => {
    const url = 
      `https://videogame-exchange.000webhostapp.com/api-php/index.php?user_id=${infoSpecificGame.user_id}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setInfoSpecificGame({
          ...infoSpecificGame,
          user_name : data.user_name
        })
      })
      .catch(err => console.log(err))
  },[])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem("userStorage")) {
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
            navigate(`${PublicRoutes.PLAYANDXBOX}`)
          );
        }, 3000);
      }
    } else {
      alert("You need an account")
      navigate(`${PublicRoutes.SIGNUP}`)
    }
  };

  return (
    <section className="specificGame">
      <h1 className="specificGame__h1">{infoSpecificGame?.name_of_game}</h1>
      <div className="specificGame__game">
        <img
          src={"data:image/jpg;base64,"+infoSpecificGame.image} 
          alt={idSpecificGame?.name_of_game}
          className="specificGame__img"
        />
        <div className="specificGame__texts">
          <div className="specificGame__user">user : {infoSpecificGame?.user_name}</div>
          <div className="specificGame__gameState">
            game state : {infoSpecificGame?.is_new === "true" ? "new" : "used"}
          </div>
          <div className="specificGame__console">
            console : {infoSpecificGame?.console_type}
          </div>
          <p className="specificGame__description">
            description : {infoSpecificGame?.description}
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
          spellCheck="false"
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
