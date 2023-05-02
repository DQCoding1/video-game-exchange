import React, { useState, useRef, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PublicRoutes } from "../../routes/routes";
import { PostsContext } from "../../contexts/Posts";
import "./SpecificGame.scss";

const SpecificGame = () => {
  const [infoSpecificGame, setInfoSpecificGame] = useState({})
  const postsInfoContext = useContext(PostsContext)
  const { idSpecificGame } = useParams();
  const navigate = useNavigate();
  const messageSuccess = useRef();
  const textAreaRef = useRef();

  useEffect(() => {
    if (infoSpecificGame.hasOwnProperty("post_id")){
      const url = 
        `https://videogame-exchange.000webhostapp.com/api-php/index.php?user_id=${infoSpecificGame?.user_id}`
      fetch(url)
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          setInfoSpecificGame({
            ...infoSpecificGame,
            user_name : data.user_name
          })
        })
        .catch(err => console.log(err))
    }
  },[infoSpecificGame])

  useEffect(() => {
    if (postsInfoContext.allPosts.length > 0){
      const specificPost = postsInfoContext.allPosts.find(item => item.post_id === idSpecificGame)
      setInfoSpecificGame(specificPost)
    }
  },[postsInfoContext.allPosts])


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
        {infoSpecificGame?.image &&
          <img
            src={"data:image/jpg;base64,"+infoSpecificGame?.image} 
            alt={idSpecificGame?.name_of_game}
            className="specificGame__img"
          />
        }
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
