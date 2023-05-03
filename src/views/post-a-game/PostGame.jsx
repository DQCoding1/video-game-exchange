import React, { useRef, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../routes/routes";
import { UserContext } from "../../contexts/User";
import { PostsContext } from "../../contexts/Posts";
import axios from "axios";
import "./PostGame.scss";



const PostGame = () => {
  const [newGame, setNewGame] = useState({
    nameOfGame: "",
    consoleType: "",
    isNew: "",
    description: "",
    image: "",
  });

  const imgContainerRef = useRef();
  const inputFileRef = useRef();
  const messageSuccess = useRef();
  const navigate = useNavigate();
  const userContextInfo = useContext(UserContext)
  const postsContextInfo = useContext(PostsContext)

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
      messageSuccess.current.classList.add("specificGame__success--visible");
      setTimeout(() => {
        return (
          messageSuccess.current.classList.remove("postGame__success--visible"),
          navigate(`${PublicRoutes.PLAYANDXBOX}`)
        );
      }, 3000);
      
      const fd = new FormData()
      fd.append("user_id",  userContextInfo.userInfo.userId)
      fd.append("name_of_game",  newGame.nameOfGame)
      fd.append("console_type",  newGame.consoleType)
      fd.append("is_new",  newGame.isNew)
      fd.append("description",  newGame.description)
      fd.append("image", inputFileRef.current.files["0"])
      axios.post("https://videogame-exchange.000webhostapp.com/api-php/postgame.php", fd)
        .then(data => {
          // console.log(data.data)
          axios.get(`https://videogame-exchange.000webhostapp.com/api-php/index.php?lastPostByUser=${userContextInfo.userInfo.userId}`)
            .then(({ data }) => {
              console.log(data)
              const newState = [
                {
                  post_id:      data[0].post_id, 
                  user_id:      data[0].user_id, 
                  image:        data[0].image, 
                  name_of_game: data[0].name_of_game, 
                  console_type: data[0].console_type, 
                  is_new:       data[0].is_new, 
                  description:  data[0].description
                },
                ...postsContextInfo.allPosts
              ]
              console.log(newState);
              postsContextInfo.setAllPosts(newState)
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
  }


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
