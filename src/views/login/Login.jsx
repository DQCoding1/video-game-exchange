import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../routes/routes";
import "./Login.scss";
import { UserContext } from "../../contexts/User";
import { indexUrl } from "../../consts/urls";

const initialInfoLogin = {
  action: "login",
  user_name: "",
  password: "",
};

const Login = () => {
  const [infoLogin, setInfoLogin] = useState(initialInfoLogin);
  const [credentials, setCredentials] = useState({});
  const userContextInfo = useContext(UserContext)
  const navigate = useNavigate();

  useEffect(() => {
    if(credentials?.correctCredentials === true){
      setTimeout(() => navigate(PublicRoutes.PLAYANDXBOX),1500)
      userContextInfo.setUserInfo({
        userName : infoLogin.user_name,
        userId : credentials.user_id
      })
    }
  }, [credentials])

  const handleSubmit = (e) => {
    e.preventDefault();
    const optionsFetch = {
      method: "POST",
      body: JSON.stringify({
        action: infoLogin.action,
        user_name: infoLogin.user_name,
        password: infoLogin.password,
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    fetch(indexUrl, optionsFetch)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.correctCredentials){
          setCredentials({
            correctCredentials: data.correctCredentials,
            user_id: data.user_id,
          });
        } else {
          setCredentials({
            correctCredentials: data.correctCredentials,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setInfoLogin({
      ...infoLogin,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="login">
      <Link to={PublicRoutes.PLAYANDXBOX} className="login__backToMain">
        BACK TO MAIN
      </Link>
      <form onSubmit={handleSubmit} className="login__form">
        {credentials?.correctCredentials === false && (
          <div className="login__incorrectPassword">Incorrect Password</div>
        )}
        {credentials?.correctCredentials === true && (
          <div className="login__correctCredentials">Correct Credentials</div>
        )}
        {credentials?.correctCredentials === "user does not exist" && (
          <div className="login__userDoesNotExist">{credentials?.correctCredentials}</div>
        )}
        <h1 className="login__title">Login</h1>
        <div className="login__inputContainer">
          <label htmlFor="userName" className="login__usernameLabel">
            User name
          </label>
          <input
            type="text"
            id="userName"
            name="user_name"
            value={infoLogin.user_name}
            onChange={handleChange}
            className="login__usernameInput"
            spellCheck="false"
          />
        </div>
        <div className="login__inputContainer">
          <label htmlFor="password" className="login__passwordLabel">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={infoLogin.password}
            onChange={handleChange}
            className="login__passwordInput"
            />
        </div>
        <button
          type="submit"
          name="Login"
          className="login__submit"
        >Login</button>
        <Link to={PublicRoutes.SIGNUP} className="login__createAccount">
          Create an account
        </Link>
      </form>
    </section>
  );
};

export default Login;
