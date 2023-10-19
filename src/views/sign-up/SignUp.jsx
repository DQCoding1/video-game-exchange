import React, { useState, useRef, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../routes/routes";
import { UserContext } from "../../contexts/User";
import signUpImage from "../../assets/signUp.jpg";
import { indexUrl } from "../../consts/urls";
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
  const [usersAndEmails, setUsersAndEmails] = useState([])
  const signUpSuccessRef = useRef();
  const navigate = useNavigate();
  const userContextInfo = useContext(UserContext)

  useEffect(() => {
    const url ="https://videogameexchange.000webhostapp.com/api-php/index.php?users_and_emails=true"
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setUsersAndEmails([...data])
      })
  },[])

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
      const repetedUser = usersAndEmails.find(
        (i) => i.user_name === infoSignUp.userName
      );
      const repeatedEmail = usersAndEmails.find(
        (i) => i.email === infoSignUp.email
      );
      if (repetedUser === undefined && repeatedEmail === undefined) {
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

        fetch(indexUrl, optionsFetch)
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            userContextInfo.setUserInfo({
                userId: data.user_id,
                userName : data.user_name
            })
    
            signUpSuccessRef.current.classList.add("signUp__success--visible");
            setTimeout(() => {
              signUpSuccessRef.current.classList.remove("signUp__success--visible");
              navigate(PublicRoutes.PLAYANDXBOX);
            }, 3000);
          })
          .catch(err => console.log(err))

      } else if (repetedUser !== undefined){
        alert("User already exists");
      } else if (repeatedEmail !== undefined){
        alert("Email already exists");
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
            spellchech="false"
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
          <button type="submit" className="signUp__submit">Send</button>
          <div className="signUp__loginContainer">
            <Link to={PublicRoutes.LOGIN} className="signUp__login">Login</Link>
          </div>
        </form>
      </div>
      <div className="signUp__success" ref={signUpSuccessRef}>
        User Created Successfully
      </div>
    </section>
  );
};

export default SignUp;
