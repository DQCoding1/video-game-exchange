import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import signUpImage from "../../assets/signUp.jpg";
import { PrivateRoutes, PublicRoutes } from "../../routes/routes";
import { allInitialGames } from "../../consts/initialGames";
import "./SignUp.scss";

const initialSignUp = {
  action: "signup",
  userName: "",
  email: "",
  password: "",
};

const regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regExpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const SignUp = () => {
  const [infoSignUp, setInfoSignUp] = useState(initialSignUp);
  const signUpSuccessRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      infoSignUp.userName.trim() === "" ||
      infoSignUp.password.trim() === ""
    ) {
      alert("inputs can't be empty");
      return;
    }
    if (regExpEmail.test(infoSignUp.email) === false) {
      alert("email is not valid");
      return;
    }
    if (regExpPassword.test(infoSignUp.password) === false) {
      alert(
        "password must be at least 8 characters with 1 upper case letter and 1 number"
      );
      return;
    } else {
      const repetedUser = allInitialGames.find(
        (i) => i.userName === infoSignUp.userName
      );
      if (repetedUser === undefined) {
        // localStorage.setItem("userStorage", infoSignUp.userName);
        const url = "https://videogame-exchange.000webhostapp.com/api-php/index.php";
        const optionsFetch = {
          method: "POST",
          body: JSON.stringify({
            "action": infoSignUp.action,
            "user_name" : infoSignUp.userName,
            "email" : infoSignUp.email,
            "password" : infoSignUp.password
          }),
          headers: {
            "Content-Type" : "application/x-www-form-urlencoded"
          }
        }

        fetch(url, optionsFetch)
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err))

        signUpSuccessRef.current.classList.add("signUp__success--visible");
        setTimeout(() => {
          signUpSuccessRef.current.classList.remove("signUp__success--visible");
          navigate(PrivateRoutes.POSTGAME);
        }, 3000);
      } else {
        alert("User already exists");
      }
    }
  };

  const handleChange = (e) => {
    setInfoSignUp({
      ...infoSignUp,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="signUp">
      <Link to={PublicRoutes.PLAYANDXBOX} className="signUp__backToMain">
        BACK TO MAIN
      </Link>
      <div className="signUp__mainContainer">
        <img
          src={signUpImage}
          alt="people playing videogames"
          className="signUp__img"
        />
        <form onSubmit={handleSubmit} className="signUp__form">
          <h1 className="signUp__h1">Sign Up</h1>
          <label htmlFor="signUpUser" className="signUp__labelUserName">
            User name
          </label>
          <input
            type="text"
            name="userName"
            id="signUpUser"
            className="signUp__userName"
            value={infoSignUp.userName}
            onChange={handleChange}
          />
          <label htmlFor="signUpEmail" className="signUp__labelEmail">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="signUpEmail"
            className="signUp__email"
            value={infoSignUp.email}
            onChange={handleChange}
          />
          <label htmlFor="signUpPassword" className="signUp__labelPassword">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="signUpPassword"
            className="signUp__password"
            value={infoSignUp.password}
            onChange={handleChange}
          />
          <input type="submit" value="send" className="signUp__submit" />
        </form>
      </div>
      <div className="signUp__success" ref={signUpSuccessRef}>
        User Created Successfully
      </div>
    </section>
  );
};

export default SignUp;
